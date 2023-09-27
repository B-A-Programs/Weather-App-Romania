export const POST = async (req) => {
    const {lng, lat} = await req.json();

    try {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${process.env.WEATHER_API_KEY}`)
        const response = await result.json()

        return new Response(JSON.stringify({response}), {status: 200})
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch recipe", {status: 500})
    }
}