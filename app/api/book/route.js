import { NextResponse } from "next/server"

export const POST = async (request) => {
  const { 
    first_name,
    last_name, 
    gender, 
    email, 
    address, 
    phone_number,
    rooms
  } = await request.json();
  
}