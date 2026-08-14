import { ArgumentMetadata, ParseEnumPipe, PipeTransform } from '@nestjs/common';

export class OptionalParseEnumPipe<T = any>
  implements PipeTransform<T | undefined, Promise<T | undefined>>
{
  private readonly parseEnumPipe: ParseEnumPipe<T>;

  constructor(enumType: T) {
    this.parseEnumPipe = new ParseEnumPipe(enumType);
  }

  async transform(value: T | undefined, metadata: ArgumentMetadata): Promise<T | undefined> {
    if (value === undefined) {
      return undefined;
    }

    return this.parseEnumPipe.transform(value, metadata);
  }
}
