import '../App.css'

function Login() {

  return (
    <div className="card bg-base-100 flex-grow">
      <div className="card-body"> 
      <h2 className='text-3xl font-medium'>Login</h2>
      <fieldset className="fieldset flex flex-col gap-1">
        {/* Username Input*/}
        <label className="input w-full">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
          <input type="input" required placeholder="Username"/>
        </label>
        {/* Password Input*/}
        <label className="input w-full">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
          <input type="password" required placeholder="Password"/>
        </label>
      </fieldset>
      <div className="btn btn-primary">
        Login
      </div>
    </div>
    </div>
  )
}

export default Login;
