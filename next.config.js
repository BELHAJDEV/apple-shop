const { PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = {
  env : {
    mongodb_username : 'chafik',
    mongodb_password : 'password2000',
    mongodb_clustername : 'apple-shop-nextjs-clust',
    mongodb_database : 'Apple-Shop',
    NEXTAUTH_SECRET : 'apple-nextjs',
    NEXTAUTH_URL : 'https://apple-shop-two.vercel.app/api/auth',
  
  }
}
