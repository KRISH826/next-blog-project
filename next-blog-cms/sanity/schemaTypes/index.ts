import { type SchemaTypeDefinition } from 'sanity'
import {categoryType} from './categoryType'
import {post} from './postType'
import { tag } from './tag'
import { comment } from './comment'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, post,tag, comment],
}
