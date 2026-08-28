'use client'
import {useEffect} from 'react'
import {createClient} from '@/lib/supabase/client'
export function useOrderRealtime(onOrder:(order:any)=>void){useEffect(()=>{const supabase=createClient();const channel=supabase.channel('danayko-orders').on('postgres_changes',{event:'UPDATE',schema:'public',table:'orders'},p=>{if(['searching_driver','driver_assigned','picked_up','delivered'].includes((p.new as any).status))onOrder(p.new)}).subscribe();return()=>{supabase.removeChannel(channel)}},[onOrder])}
