import { Controller, Get, Param } from '@nestjs/common';
import { ApiPostClientService } from 'nst-demo-api-post-client-module';
import { ApiUserClientService } from 'nst-demo-api-user-client-module';
import { Post } from './models/Post.model';

@Controller('posts')
export class PostsController {

    constructor(
        private postService: ApiPostClientService,
        private userService: ApiUserClientService,
    ) {}

    @Get(':id')
    async getPost(
        @Param('id') id,
    ): Promise<Post> {
        const postResult = await this.postService.getPost(id);
        const userResult = await this.userService.getUser(postResult.userId);

        return new Post(postResult, userResult);
    }
}
