export type ActionFunction = (prevState: any, formData: FormData) => Promise<{ message: string }>
