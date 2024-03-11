import { NextResponse } from 'next/server'

export async function GET(request, response) {
    // const res = await request.json() // res now contains body
    return NextResponse.json(
        response
    )
}

// export async function POST(request, response) {
    
//     return NextResponse.json('hey big batty gyal')
// }