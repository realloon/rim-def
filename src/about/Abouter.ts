import type { About } from '../types/about'

export default class Abouter {
  // Singleton Pattern.
  private static instance: Abouter
  private about: Partial<About> = {}

  static getInstance(): Abouter {
    return Abouter.instance ?? new Abouter()
  }

  static bundle(abouter: Abouter) {
    return abouter.about
  }

  packageId(value: About['packageId']) {
    this.about.packageId = value
    return this
  }

  name(value: About['name']) {
    this.about.name = value
    return this
  }

  author(value: About['author']) {
    this.about.author = value
    return this
  }

  description(value: About['description']) {
    this.about.description = value
    return this
  }

  supportedVersions(values: About['supportedVersions']) {
    this.about.supportedVersions = values
    return this
  }

  loadAfter(values: About['loadAfter']) {
    this.about.loadAfter = values
    return this
  }
}
