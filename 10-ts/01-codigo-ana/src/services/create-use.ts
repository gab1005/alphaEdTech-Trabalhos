class CreateUserService
{
  private erros: string = "";
  private emailRegex = /^/;

  public execute (user: User): APIResponse
  {
    if (!user.name)
    {
      this.erros = this.erros += "name:field required|"
    }

    if (user.name.length < 3)
    {
      this.erros = this.erros += "name:short name|"
    }

    if (!this.emailRegex.test(user.email))
    {
      this.erros = this.erros += "email: invalid|"
    }

    if(!new Date(user.brithdate).getTime())
    {
      this.erros = this.erros += "brithdate: invalid|"
    }

    // juntar todas mensagens de erros em um unico erro, tipo um erro
    // isso apenas junta, depois deve ser separado os erros
    if(this.erros.length != 0)
    {
      throw new Error(`400: $(this.erros)`)
    }

    user.id = v4();

    return {
      data: user,
      messages: []
    } as APIResponse

  }
}
export {CreateUserService}