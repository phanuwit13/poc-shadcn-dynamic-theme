import { ThemeConfig } from '@/stores/theme'
import { NextResponse } from 'next/server'

const kebabize = (str: string) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
  )

export async function GET(): Promise<NextResponse> {
  const response = await fetch('https://dummyjson.com/c/7846-2049-42d2-8a20')
  const data: ThemeConfig = await response.json()

  const styleConfig = Object.keys(data).reduce((acc, cur) => {
    return (acc += `--${kebabize(cur)} : ${
      data[cur as unknown as keyof ThemeConfig]
    };`)
  }, '')

  const cssContent = `
    :root {
      ${styleConfig}
    }
  `

  return new NextResponse(cssContent, {
    headers: {
      'Content-Type': 'text/css',
    },
  })
}
