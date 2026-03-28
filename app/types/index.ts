import type { Document, Types } from "mongoose";

// ── AUTH & SESSION ───────────────────────────────────────────────────────────

export interface JWTPayload {
    username: string;
    iat?: number;
    exp?: number;
    [key: string]: any; // Allow for other jose-specific properties
}

// ── DATABASE MODELS ───────────────────────────────────────────────────────────

export interface ITeam extends Document {
    username: string;
    progress: number;
    isDisqualified: boolean;
    lastAttempt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

// ── GHOST ANSWERS (SERVER) ───────────────────────────────────────────────────

export interface QuestionDef {
    questionId: string;
    matchMode: 'exact' | 'includes';
    acceptableAnswers: string[];
    displayAnswer: string;
    successMessage: string;
    failureMessage: string;
    nextQuestionId: string | null;
}

export interface TaskDef {
    taskId: string;
    questions: QuestionDef[];
}

// ── VERIFICATION (API/CLIENT) ────────────────────────────────────────────────

export interface VerifyResult {
    correct: boolean;
    displayAnswer?: string;
    successMessage?: string;
    failureMessage?: string;
    nextQuestionId?: string | null;
    completed?: boolean;
    error?: string;
}

// ── DASHBOARD (CLIENT) ────────────────────────────────────────────────────────

export type TaskStatus = "completed" | "active" | "locked";

export interface Task {
    id: number;
    name: string;
    fullName: string;
    desc: string;
    status: TaskStatus;
    linkedFile?: string;
}

export interface ChatMessage {
    id: string | number;
    role?: "ghost" | "user" | "query" | "hint" | "system";
    text: string;
    label?: string;
    isUser?: boolean;
    isTyping?: boolean;
    hintNote?: string;
}
