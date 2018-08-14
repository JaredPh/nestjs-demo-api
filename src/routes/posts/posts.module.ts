import { Module } from '@nestjs/common';
import { PostsController } from './posts.controllers';
import { ApiPostClientModule } from 'nst-demo-api-post-client-module';
import { ApiUserClientModule } from 'nst-demo-api-user-client-module';

@Module({
    controllers: [
        PostsController,
    ],
    imports: [
        ApiPostClientModule,
        ApiUserClientModule,
    ],
})
export class PostsModule {}
