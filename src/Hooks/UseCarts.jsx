import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';



const useCart = () => {
    const {user} = useContext(AuthContext);
    const { refetch, data: cart=[] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () =>{
            const res = await fetch(`https://google-voice-hunter-server.vercel.app/carts?email=${user?.email}`)

            return res.json();
        } ,
      })
      return [cart , refetch];
};

export default useCart;