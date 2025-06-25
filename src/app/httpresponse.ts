export class HttpResponse<T = any> {
  constructor(
    public data: T | null = null,
    public status: number = 200,
    public message: string = '',
    public error: any = null
  ) {}

  get ok(): boolean {
    return this.status >= 200 && this.status < 300 && !this.error;
  }
}
