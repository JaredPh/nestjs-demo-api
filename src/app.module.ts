import { PostsModule } from './routes/posts/posts.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
      PostsModule,
  ],
})
export class ApplicationModule {}
