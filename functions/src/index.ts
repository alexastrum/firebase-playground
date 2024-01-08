/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest(async (request, response) => {
  try {
    const prompt = request.query["prompt"];
    logger.info("helloWorld.onRequest", { prompt });

    if (!prompt) {
      response.status(404).send({ error: "Missing prompt query parameter!" });
      return;
    }

    // Text
    const model = new ChatGoogleGenerativeAI({
      modelName: "gemini-pro",
      maxOutputTokens: 2048,
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
        },
      ],
    });

    const result = await model.invoke([["human", prompt as string]]);

    response.send(result);
  } catch (error) {
    logger.error("helloWorld.onRequest", {
      error: (error as Error).message || error,
    });
    response.status(500).send({ error: (error as Error).message || error });
  }
});
