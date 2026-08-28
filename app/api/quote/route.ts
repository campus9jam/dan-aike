import {NextResponse} from 'next/server'
import {createClient} from '@/lib/supabase/server'
export async function POST(req:Request){const {distanceKm}=await req.json();if(typeof distanceKm!=='number'||distanceKm<0||distanceKm>1000)return NextResponse.json({error:'Invalid distance'},{status:400});const supabase=await createClient();const {data,error}=await supabase.rpc('calculate_delivery_fee',{distance_km:distanceKm});if(error)return NextResponse.json({error:error.message},{status:500});return NextResponse.json(data)}
