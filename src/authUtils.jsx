// authUtils.js

import { supabase } from '../supabaseClient'; 

// Function to create a user without sending a confirmation email
export async function signUpUser(email, password) {
  try {
    const { user, session, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    }, { disableEmailConfirmation: true });
    if (error) throw error;
    console.log('User signed up:', user);
    return { user, session };
  } catch (error) {
    console.error('Signup error:', error.message);
    return { error: error.message };
  }
}
