import { Injectable } from '@nestjs/common';
import { orthographyCkeckUseCase } from './use-cases';
import { OrthographyDto } from './dtos/orthogrphy.dto';
import OpenAI from "openai";
import { prosConsDicusserUseCase } from './use-cases/prosConsDicusserUseCase';
import { ProsConsDiscusserDto } from './dtos/prosConsDicusserDto';
@Injectable()
export class GptService {

    

     private openai = new OpenAI({
        apiKey: process.env.OPENAI_APY_KEY,
     });

    async orthographyCheck(orthographyDto:OrthographyDto){
       return await orthographyCkeckUseCase(this.openai,
        {prompt: orthographyDto.prompt}
       );
    }

    async prosConsDicusser({ prompt }: ProsConsDiscusserDto ) {
      return await prosConsDicusserUseCase(this.openai, { prompt });
    }
}
