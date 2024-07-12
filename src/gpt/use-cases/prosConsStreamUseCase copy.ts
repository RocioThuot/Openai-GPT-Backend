import OpenAI from "openai";

interface Options {
    prompt: string;
  }

export const prosConsStreamUseCase = async( openai:OpenAI,{prompt}: Options)=> {
    
  if (typeof prompt !== 'string') {
    throw new Error('El prompt debe ser una cadena de texto');
  }

  return await openai.chat.completions.create({
    model: 'gpt-4',
    stream:true,
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
    max_tokens: 500
  })
      
      

   
  
   
}