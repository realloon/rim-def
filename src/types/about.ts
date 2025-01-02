export interface About {
  packageId: string
  name: string
  author: string
  description: string
  supportedVersions: Array<number>
  loadAfter: Array<string>
}
