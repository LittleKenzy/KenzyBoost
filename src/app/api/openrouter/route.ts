import { streamText, Message } from "ai";
// import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { initialMessage } from "@/lib/data";
// import { Content } from "next/font/google";

// const google = createGoogleGenerativeAI({
//     apiKey: process.env.GOOGLE_API_KEY || "",
// });

const openai = createOpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY || "",
});

export const runtime = "nodejs";

const generateId = () => Math.random().toString(36).slice(2, 15);

const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
    {
        id: generateId(),
        role: "user",
        content: initialMessage.content
    },
    ...messages.map((message) => ({
        id: message.id || generateId(),
        role: message.role,
        content: message.content,
    }))
]


export async function POST(request: Request) {
    // console.log("OPENROUTER_API_KEY:", process.env.OPENROUTER_API_KEY);
    const { messages } = await request.json();

    const stream = await streamText({
        model: openai("gpt-3.5-turbo"), // Bisa ganti ke claude/gpt/gemma/gemini
        messages: buildGoogleGenAIPrompt(messages),
        temperature: 0.7,
    });
    return stream?.toDataStreamResponse();
}