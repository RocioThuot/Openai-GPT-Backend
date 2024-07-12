import OpenAI from "openai";

interface Options {
    prompt: string;
  }

export const prosConsDicusserUseCase = async( openai:OpenAI,{prompt}: Options)=> {
    
  if (typeof prompt !== 'string') {
    throw new Error('El prompt debe ser una cadena de texto');
  }

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-1106',
    messages: [
      {
        role: 'system',
        content: `
          Se te dará una pregunta y tu tarea es dar una respuesta con pros y contras,
          la respuesta debe de ser en formato Markdown,
          los pros y contras deben de estar en una lista,
        `
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.8,
    max_tokens: 500,
    
  })
      
      

   return response.choices[0].message;
  
   
}