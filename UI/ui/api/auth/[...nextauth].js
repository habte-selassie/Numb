import NextAuthOPtions from "next-auth/next";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google"

export default NextAuthOPtions({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      
      
     
        FacebookProvider({
          clientId: process.env.FACEBOOK_CLIENT_ID,
          clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
      
      
      // Add other providers as needed
    ],

    session : {
        maxAge :30 * 24 * 60 * 60,
        secure : process.env.NODE_ENV,
    },

    callbacks : {
        async session(session,token) {
            session.user.id = token.sub
            return session
        },

        async signIn(user,account,profile) {
            console.log(`${user.name} signed in`);
        },

        async signOut(user,account,profile) {
            console.log(`${user.name} signed out`);
        }

    },

    pages : {
        // Set custom authentication routes
  
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: null, // Disable automatic redirect for new users
  
    }
  });


//   import GoogleProvider from "next-auth/providers/google";
// ...
// providers: [
//   GoogleProvider({
//     clientId: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET
//   })
// ]
// ...

// const options = {
//     ...
//     callbacks: {
//       async signIn({ account, profile }) {
//         if (account.provider === "google") {
//           return profile.email_verified && profile.email.endsWith("@example.com")
//         }
//         return true // Do different verification for other providers that don't have `email_verified`
//       },
//     }
//     ...
//   }

