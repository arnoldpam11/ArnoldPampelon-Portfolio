create table if not exists leads (
  id text primary key,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text not null default '',
  service text not null,
  current_process text not null,
  desired_result text not null,
  budget text not null default '',
  message text not null default '',
  status text not null default 'new',
  ai_notes text,
  ai_status text not null default 'skipped',
  archived_at timestamptz
);

create index if not exists leads_status_idx on leads (status);
create index if not exists leads_created_at_idx on leads (created_at desc);
create index if not exists leads_email_idx on leads (email);
create index if not exists leads_service_idx on leads (service);

create table if not exists admins (
  user_id text primary key,
  created_at timestamptz not null default now()
);

create table if not exists lead_events (
  id text primary key,
  lead_id text not null references leads(id) on delete cascade,
  event_type text not null,
  detail text not null default '',
  created_at timestamptz not null default now()
);

create index if not exists lead_events_lead_id_idx on lead_events (lead_id);
