import { expose } from "threads/worker"

expose({
  getMessage() {
    return "Hello World"
  }
})