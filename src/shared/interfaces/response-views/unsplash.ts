export interface GetPhotoResponseView {
  "total": number,
  "results": PhotoResultView[]
}

export interface PhotoResultView {
  "id": string
  "created_at": string
  "updated_at": string
  "description": string
  "alt_description": null,
  "url": PhotoUrl
}

export interface PhotoUrl {
  "raw": string
  "full": string
  "regular": string
  "small": string
  "thumb": string
  "small_s3": string
}