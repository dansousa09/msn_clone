export class LoginService {
	constructor(private email: string, private password: string) {}


	async login(): Promise<{ success: boolean }> {
		return { success: true };
	}
}
