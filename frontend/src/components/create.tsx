"use client"

import { queueSong } from "~/actions/generations"
import { Button } from "./ui/button"

export default function CreateSong() {
  return <Button onClick={queueSong}>Generate Song</Button>
}