export function Login() {
  return (
<div>

  
  <div className="min-h-screen bg-base-200 flex items-center justify-center">

    <div className="card lg:card-side bg-base-100 shadow-2xl max-w-4xl w-full">
      <figure className="lg:w-1/2 hidden lg:block">
        <img
          src="https://img.freepik.com/free-photo/elegant-smiling-woman-glasses-striped-shirt-using-laptop-computer-while-siting-table-kitchen_171337-13030.jpg"
          alt="Login illustration"
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="card-body lg:w-1/2">
        <h1 className="text-3xl font-bold mb-2">Bienvenido a Speak</h1>
        <p className="text-sm opacity-70 mb-4">Inicie sesión para publicar en speak</p>

        <form  className="flex flex-col gap-3">
          <div>
            <label className="label">
              <span className="label-text">usuario</span>
            </label>
            <input
              type="name"
              className="input input-bordered w-full"
              placeholder="Username"
              formControlName="username"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="••••••••"
              formControlName="password"
            />
          </div>

          <button className="btn"> Login</button>

       

         
        </form>

        <div>

          
        </div>


     
      </div>
    </div>
  </div>
</div>
  );
}
