import React,{useReducer, useState} from 'react'

const Signin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in or sign-up logic here
    if (isSignUp) {
      console.log('Sign up:', email, password);
    } else {
      console.log('Sign in:', email, password);
    }
  };

  return (
    <>
       
    <div className="max-w-md mt-[5rem] mx-auto p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit}>
       
      {isSignUp ? 
      
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Username
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div> : ''}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      <div className="mt-4">
        <p>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            className="text-blue-500 underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
    </>
  )
}

export default Signin