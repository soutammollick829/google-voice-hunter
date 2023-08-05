import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';



const useCart = () => {
    const {user} = useContext(AuthContext);
    const { refetch, data: products=[] } = useQuery({
        queryKey: ['products'],
        queryFn: async () =>{
            const res = await fetch(`https://google-voice-hunter-server.vercel.app/products`)

            return res.json();
        } ,
      })
      return [products , refetch];
};

export default useCart;