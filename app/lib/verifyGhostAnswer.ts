import { VerifyResult } from "@/app/types";

export async function verifyGhostAnswer(
    taskId: string,
    questionId: string,
    answer: string
): Promise<VerifyResult> {
    try {
        const res = await fetch('/api/ghost/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ taskId, questionId, answer }),
        });

        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            return {
                correct: false,
                failureMessage: data.error || 'Verification failed. Try again.',
            };
        }

        return await res.json();
    } catch {
        return {
            correct: false,
            failureMessage: 'Network error. Please try again.',
        };
    }
}
