/**
 * CODEV_HQ Message Types
 * Based on Spec 0068 HQ Network Protocol
 */

// Message envelope for all WebSocket messages
export interface Message {
  type: string;
  id: string;
  ts: number;
  payload: Record<string, unknown>;
}

export interface Response {
  type: string;
  id: string;
  ts: number;
  success: boolean;
  error?: string;
  payload?: Record<string, unknown>;
}

// Project info sent during registration
export interface ProjectInfo {
  path: string;
  name: string;
  git_remote?: string;
}

// Status file content from local Agent Farm
export interface StatusFile {
  path: string;
  content: string;
  git_sha?: string;
}

// Builder state
export interface BuilderInfo {
  builder_id: string;
  status: 'spawning' | 'implementing' | 'blocked' | 'pr-ready' | 'complete';
  phase?: string;
  branch?: string;
}

// Connected instance state (in-memory)
export interface ConnectedInstance {
  instance_id: string;
  instance_name?: string;
  version?: string;
  connected_at: Date;
  last_ping: Date;
  projects: ProjectInfo[];
  status_files: Map<string, StatusFile>;
  builders: Map<string, BuilderInfo>;
}

// Message payloads: Local -> HQ

export interface RegisterPayload {
  instance_id: string;
  instance_name?: string;
  version?: string;
  projects: ProjectInfo[];
}

export interface StatusUpdatePayload {
  project_path: string;
  status_file: string;
  content: string;
  git_sha?: string;
}

export interface BuilderUpdatePayload {
  project_path: string;
  builder_id: string;
  status: BuilderInfo['status'];
  phase?: string;
  branch?: string;
}

export interface GateCompletedPayload {
  project_path: string;
  project_id: string;
  gate: string;
  completed_by: string;
  completed_at: string;
}

// Message payloads: HQ -> Local

export interface ApprovalPayload {
  project_path: string;
  project_id: string;
  gate: string;
  approved_by: string;
  approved_at: string;
  comment?: string;
}

export interface CommandPayload {
  project_path: string;
  command: 'spawn_builder' | 'send_message' | 'run_consultation' | 'sync_status';
  args: Record<string, unknown>;
}

// Ping/Pong for heartbeat
export interface PingPayload {
  ts: number;
}

export interface PongPayload {
  ts: number;
}
