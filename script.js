(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E"
 ],
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "propagateClick": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "verticalAlign": "top",
 "width": "100%",
 "overflow": "visible",
 "defaultVRPointer": "laser",
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "paddingRight": 0,
 "definitions": [{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_105548-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_tcap0",
  "this.overlay_0CB5B012_19ED_137C_4181_BAE23BE6B648",
  "this.overlay_0C8DDFCF_19ED_0CE4_41B7_2B2DAEB41DA5"
 ],
 "id": "panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.21,
   "class": "AdjacentPanorama",
   "yaw": -169.12,
   "panorama": "this.panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D",
   "distance": 1
  },
  {
   "backwardYaw": -91.39,
   "class": "AdjacentPanorama",
   "yaw": 0.65,
   "panorama": "this.panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_t.jpg"
},
{
 "hfovMin": 60,
 "label": "VID_20220824_112641AA_output4K_edit",
 "id": "media_17421A12_1980_CD2C_41B5_86A00DAF6793",
 "loop": false,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Video360",
 "hfov": 360,
 "thumbnailUrl": "media/media_17421A12_1980_CD2C_41B5_86A00DAF6793_t.jpg",
 "video": [
  {
   "width": 2160,
   "url": "media/media_17421A12_1980_CD2C_41B5_86A00DAF6793.mp4",
   "type": "video/mp4",
   "bitrate": 4931,
   "class": "Video360Resource",
   "framerate": 24,
   "height": 1080,
   "posterURL": "media/media_17421A12_1980_CD2C_41B5_86A00DAF6793_poster.jpg"
  }
 ]
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_104348-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_tcap0",
  "this.overlay_0C912DCE_19EF_0CE4_4191_D7C20A7DE9F1"
 ],
 "id": "panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.39,
   "class": "AdjacentPanorama",
   "yaw": 87.38,
   "panorama": "this.panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0CDEC5FB_1980_46DD_419D_D3E7AD3BE396",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": -12.44,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_105936-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_tcap0",
  "this.overlay_0CCD1385_19EB_1564_41AD_C5BCF82F4C1C"
 ],
 "id": "panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.21,
   "class": "AdjacentPanorama",
   "yaw": -164.62,
   "panorama": "this.panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 1,
 "automaticRotationSpeed": 10,
 "manualRotationSpeed": 1800,
 "class": "RotationalCamera",
 "id": "media_17421A12_1980_CD2C_41B5_86A00DAF6793_camera",
 "initialPosition": {
  "class": "RotationalCameraPosition",
  "hfov": 120,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_102028-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0",
  "this.overlay_0B311523_19E5_7D5C_418A_10BC4850D1CF"
 ],
 "id": "panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 166.34,
   "class": "AdjacentPanorama",
   "yaw": -2.21,
   "panorama": "this.panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_112756-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_tcap0",
  "this.overlay_0C9533C8_19EB_14EC_41A2_8F6285A0F3E8"
 ],
 "id": "panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -90.98,
   "class": "AdjacentPanorama",
   "yaw": 86.56,
   "panorama": "this.panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_105040-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_tcap0",
  "this.overlay_0CC1B3DC_19EF_34E4_41B4_1DEEFBAE4702",
  "this.overlay_0C9A23D8_19EF_14EC_41B4_4CCC796ECE06"
 ],
 "id": "panorama_1CAF8727_17E7_1DA4_4171_E9812037E607",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 168.79,
   "class": "AdjacentPanorama",
   "yaw": -2.21,
   "panorama": "this.panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7",
   "distance": 1
  },
  {
   "backwardYaw": -2.21,
   "class": "AdjacentPanorama",
   "yaw": 171.24,
   "panorama": "this.panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CA77229_17E7_37AC_41B5_912A402EE203_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_103001-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_tcap0",
  "this.overlay_0CB38311_19ED_157C_41A0_8120D6AA6F93",
  "this.overlay_0CCEAFAC_19ED_0CA4_4189_83F9BF7F9733",
  "this.overlay_0C56C68B_19EC_FF6C_41A5_52982EF9A988"
 ],
 "id": "panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068"
  },
  {
   "backwardYaw": 167.56,
   "class": "AdjacentPanorama",
   "yaw": -2.21,
   "panorama": "this.panorama_1CA77229_17E7_37AC_41B5_912A402EE203",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_111837-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_tcap0",
  "this.overlay_0CDD39BA_19EB_14AC_41A6_D7DA108987DF",
  "this.overlay_169CAB95_1981_C355_41B5_7761CBCFE6D7"
 ],
 "id": "panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.media_157B2723_1980_C36D_41AA_DBEA771D94F0"
  },
  {
   "backwardYaw": 86.56,
   "class": "AdjacentPanorama",
   "yaw": -90.98,
   "panorama": "this.panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0C071681_1980_452C_419C_54EC8E3DC095",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 177.79,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_105117-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_tcap0",
  "this.overlay_0CC1A07F_19EC_F3A4_4184_C76D71E1D8FE"
 ],
 "id": "panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.21,
   "class": "AdjacentPanorama",
   "yaw": 168.79,
   "panorama": "this.panorama_1CAF8727_17E7_1DA4_4171_E9812037E607",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0CF82627_1980_4575_4188_7723218D467D",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": -8.76,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0B9D0772_1980_43EC_41B7_80B60B8B06E7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": -92.62,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0CE59656_1980_45D7_41B9_29E7E7AB3313",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 177.79,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 1,
 "automaticRotationSpeed": 10,
 "manualRotationSpeed": 1800,
 "class": "RotationalCamera",
 "id": "media_157B2723_1980_C36D_41AA_DBEA771D94F0_camera",
 "initialPosition": {
  "class": "RotationalCameraPosition",
  "hfov": 120,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_102249-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_tcap0",
  "this.overlay_0C995C9A_19E5_136C_415F_5711D0A22887",
  "this.overlay_0C2B802B_19E5_13AC_41AD_0FD12B43B9BF"
 ],
 "id": "panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.21,
   "class": "AdjacentPanorama",
   "yaw": 166.34,
   "panorama": "this.panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492",
   "distance": 1
  },
  {
   "backwardYaw": 92.7,
   "class": "AdjacentPanorama",
   "yaw": -25.53,
   "panorama": "this.panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0BB4E7C8_1980_433C_41B3_EE2B207F6556",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": -179.35,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0C15366D_1980_45F4_41B8_028A9A096E64",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 88.61,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_105454-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_tcap0",
  "this.overlay_0CC73A17_19ED_1764_417F_B233050D57B3",
  "this.overlay_0B2866F1_19ED_7CBC_4193_A9CDF08554C7"
 ],
 "id": "panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -169.12,
   "class": "AdjacentPanorama",
   "yaw": -2.21,
   "panorama": "this.panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0B8AB785_1980_4334_4150_D4FAEC0A6D3B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 15.38,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0C9485A7_1980_4775_4153_5D5FFB8777A8",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": -87.3,
  "pitch": 0
 }
},
{
 "mouseControlMode": "drag_rotation",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0CBDE5D2_1980_472F_41B1_B640AC728590",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 177.79,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 1,
 "automaticRotationSpeed": 10,
 "manualRotationSpeed": 1800,
 "class": "RotationalCamera",
 "id": "media_099A0566_1980_C7F7_41B6_01B286FD26BC_camera",
 "initialPosition": {
  "class": "RotationalCameraPosition",
  "hfov": 120,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_camera",
   "media": "this.panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_camera",
   "media": "this.panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_camera",
   "media": "this.panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_camera",
   "media": "this.panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_camera",
   "media": "this.panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_camera",
   "media": "this.panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CA77229_17E7_37AC_41B5_912A402EE203_camera",
   "media": "this.panorama_1CA77229_17E7_37AC_41B5_912A402EE203",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_camera",
   "media": "this.panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_camera",
   "media": "this.panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_camera",
   "media": "this.panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_camera",
   "media": "this.panorama_1CAF8727_17E7_1DA4_4171_E9812037E607",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_camera",
   "media": "this.panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_camera",
   "media": "this.panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_camera",
   "media": "this.panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_camera",
   "media": "this.panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_camera",
   "media": "this.panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_camera",
   "media": "this.panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_camera",
   "media": "this.panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_camera",
   "media": "this.panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.media_157B2723_1980_C36D_41AA_DBEA771D94F0_camera",
   "media": "this.media_157B2723_1980_C36D_41AA_DBEA771D94F0",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 19, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 19)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "Video360PlayListItem"
  },
  {
   "camera": "this.media_167DFDA6_1980_C774_41B2_87885A650244_camera",
   "media": "this.media_167DFDA6_1980_C774_41B2_87885A650244",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 20, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 20)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "Video360PlayListItem"
  },
  {
   "camera": "this.media_099A0566_1980_C7F7_41B6_01B286FD26BC_camera",
   "media": "this.media_099A0566_1980_C7F7_41B6_01B286FD26BC",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 21, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 21)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "Video360PlayListItem"
  },
  {
   "camera": "this.media_17421A12_1980_CD2C_41B5_86A00DAF6793_camera",
   "media": "this.media_17421A12_1980_CD2C_41B5_86A00DAF6793",
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 22, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 22)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 22, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "Video360PlayListItem"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0CCE6610_1980_452B_41B7_715C3AFDE98A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 178.61,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_102627-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_tcap0",
  "this.overlay_0C60C6D8_19EB_1CEC_41A8_471456F4F27D",
  "this.overlay_0C419A54_19EC_F7E4_41B1_BB1617A43D64"
 ],
 "id": "panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492"
  },
  {
   "backwardYaw": 171.24,
   "class": "AdjacentPanorama",
   "yaw": -94.26,
   "panorama": "this.panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_104222-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_tcap0",
  "this.overlay_0CC48812_19EF_F37C_41AD_BF47E1DD2764"
 ],
 "id": "panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 87.38,
   "class": "AdjacentPanorama",
   "yaw": -1.39,
   "panorama": "this.panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0BBF87AF_1980_4374_41A1_2199BA58E248",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 85.74,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0CEB863E_1980_4557_41B4_4EE806485AAC",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": -93.44,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0C9E0591_1980_472D_41B6_89B6E9F57CA7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 177.79,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0CAF85E6_1980_46F7_41B3_03C4E958D9F0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 10.88,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_105911-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_tcap0",
  "this.overlay_0CC0369A_19EC_FF6C_41B1_5A15E68C25E4",
  "this.overlay_0C71150C_19EB_3D64_41B5_069D6A9B985C"
 ],
 "id": "panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -164.62,
   "class": "AdjacentPanorama",
   "yaw": -2.21,
   "panorama": "this.panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004"
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0874D71D_1980_4354_4192_EB4DF3CA1263",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 177.79,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0B80C79B_1980_435C_41B1_E7CCD1F4C314",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 177.79,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_105623-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_tcap0",
  "this.overlay_0CC25971_19ED_15BF_41A6_48202365F9BF",
  "this.overlay_0C8D1A61_19ED_F7DC_41B7_D44408D0AD30"
 ],
 "id": "panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.65,
   "class": "AdjacentPanorama",
   "yaw": -91.39,
   "panorama": "this.panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_t.jpg"
},
{
 "class": "PlayList",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "items": [
  {
   "camera": "this.panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_camera",
   "media": "this.panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_camera",
   "media": "this.panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_camera",
   "media": "this.panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_camera",
   "media": "this.panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_camera",
   "media": "this.panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_camera",
   "media": "this.panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CA77229_17E7_37AC_41B5_912A402EE203_camera",
   "media": "this.panorama_1CA77229_17E7_37AC_41B5_912A402EE203",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_camera",
   "media": "this.panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_camera",
   "media": "this.panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_camera",
   "media": "this.panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_camera",
   "media": "this.panorama_1CAF8727_17E7_1DA4_4171_E9812037E607",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_camera",
   "media": "this.panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_camera",
   "media": "this.panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_camera",
   "media": "this.panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_camera",
   "media": "this.panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_camera",
   "media": "this.panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_camera",
   "media": "this.panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_camera",
   "media": "this.panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_camera",
   "media": "this.panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.media_157B2723_1980_C36D_41AA_DBEA771D94F0_camera",
   "media": "this.media_157B2723_1980_C36D_41AA_DBEA771D94F0",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "Video360PlayListItem"
  },
  {
   "camera": "this.media_167DFDA6_1980_C774_41B2_87885A650244_camera",
   "media": "this.media_167DFDA6_1980_C774_41B2_87885A650244",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "Video360PlayListItem"
  },
  {
   "camera": "this.media_099A0566_1980_C7F7_41B6_01B286FD26BC_camera",
   "media": "this.media_099A0566_1980_C7F7_41B6_01B286FD26BC",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "Video360PlayListItem"
  },
  {
   "camera": "this.media_17421A12_1980_CD2C_41B5_86A00DAF6793_camera",
   "media": "this.media_17421A12_1980_CD2C_41B5_86A00DAF6793",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "Video360PlayListItem"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "hfovMin": 60,
 "label": "VID_20220824_112553AA_output4K_Edit",
 "id": "media_099A0566_1980_C7F7_41B6_01B286FD26BC",
 "loop": false,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Video360",
 "hfov": 360,
 "thumbnailUrl": "media/media_099A0566_1980_C7F7_41B6_01B286FD26BC_t.jpg",
 "video": [
  {
   "width": 2160,
   "url": "media/media_099A0566_1980_C7F7_41B6_01B286FD26BC.mp4",
   "type": "video/mp4",
   "bitrate": 4946,
   "class": "Video360Resource",
   "framerate": 24,
   "height": 1080,
   "posterURL": "media/media_099A0566_1980_C7F7_41B6_01B286FD26BC_poster.jpg"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0C8335BE_1980_4757_41B6_AF9934D03522",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": -13.66,
  "pitch": 0
 }
},
{
 "hfovMin": 60,
 "label": "VID_20220824_112110AA_output4K_Edit",
 "id": "media_157B2723_1980_C36D_41AA_DBEA771D94F0",
 "loop": false,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Video360",
 "hfov": 360,
 "thumbnailUrl": "media/media_157B2723_1980_C36D_41AA_DBEA771D94F0_t.jpg",
 "video": [
  {
   "width": 2160,
   "url": "media/media_157B2723_1980_C36D_41AA_DBEA771D94F0.mp4",
   "type": "video/mp4",
   "bitrate": 4199,
   "class": "Video360Resource",
   "framerate": 24,
   "height": 1080,
   "posterURL": "media/media_157B2723_1980_C36D_41AA_DBEA771D94F0_poster.jpg"
  }
 ]
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_104912-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_tcap0",
  "this.overlay_0CC35E35_19EF_0FA4_4199_D323442B4CCE",
  "this.overlay_0C821712_19EF_1D7C_4196_01EA469A871E"
 ],
 "id": "panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730"
  },
  {
   "backwardYaw": 171.24,
   "class": "AdjacentPanorama",
   "yaw": -2.21,
   "panorama": "this.panorama_1CAF8727_17E7_1DA4_4171_E9812037E607",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0868F734_1980_4354_41A7_325BDC83337F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": -8.76,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_102538-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_tcap0",
  "this.overlay_0C8B8963_19E4_F5DC_41A1_E714DCC9C1FD",
  "this.overlay_0CB0DBFD_19EB_34A4_41AC_CBAB3E8B9373"
 ],
 "id": "panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -25.53,
   "class": "AdjacentPanorama",
   "yaw": 92.7,
   "panorama": "this.panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8"
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0864475E_1980_43D4_4199_E6027D0DF06B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 154.47,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0862C74A_1980_433C_41B8_2F6363B0850A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 89.02,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "camera_0870770A_1980_433C_41B0_8383C99F22DE",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": -11.21,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "hfovMin": 60,
 "label": "VID_20220824_112508AA_output4K_Edit",
 "id": "media_167DFDA6_1980_C774_41B2_87885A650244",
 "loop": false,
 "pitch": 0,
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Video360",
 "hfov": 360,
 "thumbnailUrl": "media/media_167DFDA6_1980_C774_41B2_87885A650244_t.jpg",
 "video": [
  {
   "width": 2160,
   "url": "media/media_167DFDA6_1980_C774_41B2_87885A650244.mp4",
   "type": "video/mp4",
   "bitrate": 4915,
   "class": "Video360Resource",
   "framerate": 24,
   "height": 1080,
   "posterURL": "media/media_167DFDA6_1980_C774_41B2_87885A650244_poster.jpg"
  }
 ]
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_103026-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CA77229_17E7_37AC_41B5_912A402EE203_tcap0",
  "this.overlay_0CC26110_19EF_357C_4194_CF8E9AE5CAA0"
 ],
 "id": "panorama_1CA77229_17E7_37AC_41B5_912A402EE203",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.21,
   "class": "AdjacentPanorama",
   "yaw": 167.56,
   "panorama": "this.panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_t.jpg"
},
{
 "frames": [
  {
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 5,
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_t.jpg"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220824_102931-art-width-6912px",
 "hfov": 360,
 "overlays": [
  "this.panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_tcap0",
  "this.overlay_0CC12C93_19ED_337C_41B8_F3F5495195B6"
 ],
 "id": "panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6",
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "backwardYaw": -94.26,
   "class": "AdjacentPanorama",
   "yaw": 171.24,
   "panorama": "this.panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068",
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "partial": false,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "id": "panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 1,
 "automaticRotationSpeed": 10,
 "manualRotationSpeed": 1800,
 "class": "RotationalCamera",
 "id": "media_167DFDA6_1980_C774_41B2_87885A650244_camera",
 "initialPosition": {
  "class": "RotationalCameraPosition",
  "hfov": 120,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "class": "ViewerArea",
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "shadow": false,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "height": 641,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "Container",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--INFO photo"
 },
 "visible": false,
 "paddingLeft": 0,
 "backgroundOpacity": 0.6
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "Container",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "paddingLeft": 0,
 "backgroundOpacity": 0.6
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "Container",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "paddingLeft": 0,
 "backgroundOpacity": 0.6
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "Container",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "visible": false,
 "paddingLeft": 0,
 "backgroundOpacity": 0.6
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "maxHeight": 58,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxHeight": 58,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "backgroundOpacity": 0
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D, this.camera_0CE59656_1980_45D7_41B9_29E7E7AB3313); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACA421A_182D_176C_41AF_624CADAB05A8",
   "yaw": -169.12,
   "pitch": -4.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.71
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.12,
   "hfov": 43.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.54
  }
 ],
 "id": "overlay_0CB5B012_19ED_137C_4181_BAE23BE6B648",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004, this.camera_0C15366D_1980_45F4_41B8_028A9A096E64); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACA221A_182D_176C_4191_2635CA777789",
   "yaw": 0.65,
   "pitch": -4.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.74
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.65,
   "hfov": 43.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.13
  }
 ],
 "id": "overlay_0C8DDFCF_19ED_0CE4_41B7_2B2DAEB41DA5",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730, this.camera_0CCE6610_1980_452B_41B7_715C3AFDE98A); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3AC86213_182D_177C_41B1_007BF60D12D1",
   "yaw": 87.38,
   "pitch": -1.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.84
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.38,
   "hfov": 43.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.27
  }
 ],
 "id": "overlay_0C912DCE_19EF_0CE4_4191_D7C20A7DE9F1",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC, this.camera_0CBDE5D2_1980_472F_41B1_B640AC728590); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3AD4E21B_182D_176C_41A8_4F654B9B76C8",
   "yaw": -164.62,
   "pitch": -4.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.69
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -164.62,
   "hfov": 43.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.95
  }
 ],
 "id": "overlay_0CCD1385_19EB_1564_41AD_C5BCF82F4C1C",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E, this.camera_0C8335BE_1980_4757_41B6_AF9934D03522); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3AC35209_182D_176C_41AA_20B43B1AAB3C",
   "yaw": -2.21,
   "pitch": -5.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.63
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.21,
   "hfov": 43.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.77
  }
 ],
 "id": "overlay_0B311523_19E5_7D5C_418A_10BC4850D1CF",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E, this.camera_0862C74A_1980_433C_41B8_2F6363B0850A); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3AD5821C_182D_1764_41A1_9B6028D0F887",
   "yaw": 86.56,
   "pitch": -8.22,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.4
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.56,
   "hfov": 43.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.22
  }
 ],
 "id": "overlay_0C9533C8_19EB_14EC_41A2_8F6285A0F3E8",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE, this.camera_0874D71D_1980_4354_4192_EB4DF3CA1263); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3AC9C213_182D_177C_41A2_C17298EC054D",
   "yaw": 171.24,
   "pitch": -2.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.8
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.24,
   "hfov": 43.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.9
  }
 ],
 "id": "overlay_0CC1B3DC_19EF_34E4_41B4_1DEEFBAE4702",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7, this.camera_0870770A_1980_433C_41B0_8383C99F22DE); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3AC9A214_182D_1764_4198_18EC58374BF3",
   "yaw": -2.21,
   "pitch": -5.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.63
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.21,
   "hfov": 43.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.77
  }
 ],
 "id": "overlay_0C9A23D8_19EF_14EC_41B4_4CCC796ECE06",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CA77229_17E7_37AC_41B5_912A402EE203, this.camera_0CDEC5FB_1980_46DD_419D_D3E7AD3BE396); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACE0211_182D_177C_41AE_2167A0223854",
   "yaw": -2.21,
   "pitch": -5.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.63
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.21,
   "hfov": 43.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.77
  }
 ],
 "id": "overlay_0CB38311_19ED_157C_41A0_8120D6AA6F93",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACEF212_182D_177C_4195_96D3A58D4EC3",
   "yaw": -135.98,
   "pitch": -5.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.63
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.98,
   "hfov": 43.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.77
  }
 ],
 "id": "overlay_0CCEAFAC_19ED_0CA4_4189_83F9BF7F9733",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACF5212_182D_177C_4160_7810FB8ACA96",
   "yaw": 88.61,
   "pitch": -4.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.69
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.61,
   "hfov": 43.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.95
  }
 ],
 "id": "overlay_0C56C68B_19EC_FF6C_41A5_52982EF9A988",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628, this.camera_0CEB863E_1980_4557_41B4_4EE806485AAC); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3AD5721C_182D_1764_41AC_AF760898C50E",
   "yaw": -90.98,
   "pitch": -6.59,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.56
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.98,
   "hfov": 43.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.59
  }
 ],
 "id": "overlay_0CDD39BA_19EB_14AC_41A6_D7DA108987DF",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19); this.MainViewerPanoramaPlayer.play()",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_0AD034F7_1980_46D4_419B_DF6DDB0223DE",
   "yaw": -3.46,
   "pitch": -0.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.85
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.46,
   "hfov": 43.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.86
  }
 ],
 "id": "overlay_169CAB95_1981_C355_41B5_7761CBCFE6D7",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CAF8727_17E7_1DA4_4171_E9812037E607, this.camera_0B80C79B_1980_435C_41B1_E7CCD1F4C314); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACA3214_182D_1764_41A1_5ABE8617C9CE",
   "yaw": 168.79,
   "pitch": -4.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.71
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.79,
   "hfov": 43.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.54
  }
 ],
 "id": "overlay_0CC1A07F_19EC_F3A4_4184_C76D71E1D8FE",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492, this.camera_0C9E0591_1980_472D_41B6_89B6E9F57CA7); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3AC3F20A_182D_176C_41B3_566E3168D11D",
   "yaw": 166.34,
   "pitch": -12.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 42.78
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.34,
   "hfov": 42.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.72
  }
 ],
 "id": "overlay_0C995C9A_19E5_136C_415F_5711D0A22887",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917, this.camera_0C9485A7_1980_4775_4153_5D5FFB8777A8); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3AC3B20B_182D_176C_41A2_9CF7063D9F01",
   "yaw": -25.53,
   "pitch": -6.99,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.53
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.53,
   "hfov": 43.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.99
  }
 ],
 "id": "overlay_0C2B802B_19E5_13AC_41AD_0FD12B43B9BF",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACA8219_182D_176C_41AF_4A1A8D3A9CB6",
   "yaw": -88.12,
   "pitch": -3.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.78
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.12,
   "hfov": 43.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.31
  }
 ],
 "id": "overlay_0CC73A17_19ED_1764_417F_B233050D57B3",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C, this.camera_0CAF85E6_1980_46F7_41B3_03C4E958D9F0); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3AC9F21A_182D_176C_41B6_68C73DD31CC9",
   "yaw": -2.21,
   "pitch": -5.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.63
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.21,
   "hfov": 43.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.77
  }
 ],
 "id": "overlay_0B2866F1_19ED_7CBC_4193_A9CDF08554C7",
 "enabledInCardboard": true
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "maxHeight": 58,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton VR"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "maxHeight": 58,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "backgroundOpacity": 0
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACD7211_182D_177C_4181_1AC3009ABB19",
   "yaw": 166.74,
   "pitch": -5.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.66
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.74,
   "hfov": 43.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.36
  }
 ],
 "id": "overlay_0C60C6D8_19EB_1CEC_41A8_471456F4F27D",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6, this.camera_0868F734_1980_4354_41A7_325BDC83337F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACD2211_182D_177C_418A_3CE7CD01A192",
   "yaw": -94.26,
   "pitch": -12.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 42.78
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.26,
   "hfov": 42.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.72
  }
 ],
 "id": "overlay_0C419A54_19EC_F7E4_41B1_BB1617A43D64",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5, this.camera_0B9D0772_1980_43EC_41B7_80B60B8B06E7); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACF8212_182D_177C_41B1_072F2758F50D",
   "yaw": -1.39,
   "pitch": -0.45,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.85
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.39,
   "hfov": 43.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.45
  }
 ],
 "id": "overlay_0CC48812_19EF_F37C_41AD_BF47E1DD2764",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACBF21B_182D_176C_41B6_8F70F799F86F",
   "yaw": -163.39,
   "pitch": -5.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.66
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.39,
   "hfov": 43.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.36
  }
 ],
 "id": "overlay_0CC0369A_19EC_FF6C_41B1_5A15E68C25E4",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7, this.camera_0B8AB785_1980_4334_4150_D4FAEC0A6D3B); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3AD4421B_182D_176C_41B5_44BE2F394EDE",
   "yaw": -2.21,
   "pitch": -5.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.63
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.21,
   "hfov": 43.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.77
  }
 ],
 "id": "overlay_0C71150C_19EB_3D64_41B5_069D6A9B985C",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C, this.camera_0BB4E7C8_1980_433C_41B3_EE2B207F6556); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACAA21A_182D_176C_41A7_624F2482AAD0",
   "yaw": -91.39,
   "pitch": -6.18,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.6
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.39,
   "hfov": 43.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.18
  }
 ],
 "id": "overlay_0CC25971_19ED_15BF_41A6_48202365F9BF",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACB021B_182D_176C_4193_80C26BBD8BE7",
   "yaw": -2.21,
   "pitch": -5.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.63
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.21,
   "hfov": 43.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.77
  }
 ],
 "id": "overlay_0C8D1A61_19ED_F7DC_41B7_D44408D0AD30",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3AC8F213_182D_177C_4195_5F485D63416C",
   "yaw": 169.2,
   "pitch": -1.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.84
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.2,
   "hfov": 43.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.27
  }
 ],
 "id": "overlay_0CC35E35_19EF_0FA4_4199_D323442B4CCE",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CAF8727_17E7_1DA4_4171_E9812037E607, this.camera_0CF82627_1980_4575_4188_7723218D467D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3AC94213_182D_177C_41B0_066FF3F26D02",
   "yaw": -2.21,
   "pitch": -5.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.63
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.21,
   "hfov": 43.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.77
  }
 ],
 "id": "overlay_0C821712_19EF_1D7C_4196_01EA469A871E",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E, this.camera_0864475E_1980_43D4_4199_E6027D0DF06B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACC0210_182D_177C_41B1_33E612AD5B83",
   "yaw": 92.7,
   "pitch": -11.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 42.91
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.7,
   "hfov": 42.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.9
  }
 ],
 "id": "overlay_0C8B8963_19E4_F5DC_41A1_E714DCC9C1FD",
 "enabledInCardboard": true
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACCF210_182D_177C_4172_5F7465551C62",
   "yaw": -2.21,
   "pitch": -5.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.63
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.21,
   "hfov": 43.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.77
  }
 ],
 "id": "overlay_0CB0DBFD_19EB_34A4_41AC_CBAB3E8B9373",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CA77229_17E7_37AC_41B5_912A402EE203_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8, this.camera_0C071681_1980_452C_419C_54EC8E3DC095); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACF0212_182D_177C_419D_76D8D550D8FD",
   "yaw": 167.56,
   "pitch": -2.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.8
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.56,
   "hfov": 43.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.9
  }
 ],
 "id": "overlay_0CC26110_19EF_357C_4194_CF8E9AE5CAA0",
 "enabledInCardboard": true
},
{
 "hfov": 27,
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_tcap0.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 1000
   }
  ]
 },
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068, this.camera_0BBF87AF_1980_4374_41A1_2199BA58E248); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01"
 },
 "items": [
  {
   "image": "this.AnimatedImageResource_3ACDA211_182D_177C_4147_8F3CB5EF2174",
   "yaw": 171.24,
   "pitch": -4.54,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 43.71
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.24,
   "hfov": 43.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.54
  }
 ],
 "id": "overlay_0CC12C93_19ED_337C_41B8_F3F5495195B6",
 "enabledInCardboard": true
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "height": 110,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 },
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "paddingBottom": 0,
 "width": "91.304%",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "shadow": false,
 "gap": 3,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 },
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "visible": false,
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "width": 330,
 "scrollBarWidth": 10,
 "right": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "contentOpaque": false,
 "gap": 10,
 "paddingLeft": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "15%",
 "propagateClick": false,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "10%",
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "contentOpaque": false,
 "gap": 10,
 "paddingLeft": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "contentOpaque": false,
 "gap": 10,
 "paddingLeft": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "15%",
 "propagateClick": true,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "10%",
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "shadow": false,
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 },
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "paddingBottom": 0,
 "shadowColor": "#000000",
 "shadowHorizontalLength": 0,
 "right": "15%",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 1,
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "shadowVerticalLength": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "shadowBlurRadius": 25,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "contentOpaque": false,
 "gap": 10,
 "paddingLeft": 0,
 "backgroundOpacity": 1,
 "shadowSpread": 1
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACA421A_182D_176C_41AF_624CADAB05A8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACA221A_182D_176C_4191_2635CA777789",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CB8FF88_17E7_0D6C_41A8_DF2E119C1B3C_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AC86213_182D_177C_41B1_007BF60D12D1",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CB0CC61_17E7_13DC_4198_9A11667372C5_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AD4E21B_182D_176C_41A8_4F654B9B76C8",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CAC003D_17E7_73A4_41B4_8848FFAAFAA7_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AC35209_182D_176C_41AA_20B43B1AAB3C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CDBEDAF_17E5_0CA4_41B6_4E2636A1F492_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AD5821C_182D_1764_41A1_9B6028D0F887",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CACE6E5_17E7_3CA4_419E_05A79AD8E628_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AC9C213_182D_177C_41A2_C17298EC054D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AC9A214_182D_1764_4198_18EC58374BF3",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CAF8727_17E7_1DA4_4171_E9812037E607_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACE0211_182D_177C_41AE_2167A0223854",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACEF212_182D_177C_4195_96D3A58D4EC3",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACF5212_182D_177C_4160_7810FB8ACA96",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CA595D8_17E7_1CEC_419B_33437035ADD8_1_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AD5721C_182D_1764_41AC_AF760898C50E",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_0AD034F7_1980_46D4_419B_DF6DDB0223DE",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CAF1A37_17E7_17A4_41B1_2166EDA4057E_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACA3214_182D_1764_41A1_5ABE8617C9CE",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CB1B4B1_17E7_3CBC_41A1_1B917E2EC1E7_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AC3F20A_182D_176C_41B3_566E3168D11D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AC3B20B_182D_176C_41A2_9CF7063D9F01",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CA65B2A_17E5_15AC_41A5_A9E60D797D4E_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACA8219_182D_176C_41AF_4A1A8D3A9CB6",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AC9F21A_182D_176C_41B6_68C73DD31CC9",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CB11190_17E7_157C_41B1_1F5F539AD03D_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACD7211_182D_177C_4181_1AC3009ABB19",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACD2211_182D_177C_418A_3CE7CD01A192",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CA62ED0_17E5_0CFC_41A7_2DD435D8F068_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACF8212_182D_177C_41B1_072F2758F50D",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CA42EC8_17E7_0CEC_41B1_584628F3C730_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACBF21B_182D_176C_41B6_8F70F799F86F",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AD4421B_182D_176C_41B5_44BE2F394EDE",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CAC03CD_17E7_14E4_41AF_F88E4EC23CAC_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACAA21A_182D_176C_41A7_624F2482AAD0",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACB021B_182D_176C_4193_80C26BBD8BE7",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CBBBCB4_17E7_0CA4_41AE_F7F170BE4004_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AC8F213_182D_177C_4195_5F485D63416C",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3AC94213_182D_177C_41B0_066FF3F26D02",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CAEF9DC_17E7_74E4_418E_F047A65B79AE_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACC0210_182D_177C_41B1_33E612AD5B83",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACCF210_182D_177C_4172_5F7465551C62",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CA751B3_17E5_34BC_41A1_6EFC9017A917_1_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACF0212_182D_177C_419D_76D8D550D8FD",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CA77229_17E7_37AC_41B5_912A402EE203_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "frameDuration": 41,
 "frameCount": 24,
 "id": "AnimatedImageResource_3ACDA211_182D_177C_4147_8F3CB5EF2174",
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CA4B8EB_17E4_F4AC_4167_B29B3DC25FE6_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "maxHeight": 60,
 "propagateClick": true,
 "width": 60,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 60,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "image button menu"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "maxHeight": 58,
 "propagateClick": true,
 "width": 58,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 58,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareFacebook(window.location.href)",
 "class": "IconButton",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton FB"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "backgroundOpacity": 0
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container black"
 },
 "height": "100%",
 "paddingLeft": 0,
 "backgroundOpacity": 0.4
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "maxHeight": 80,
 "paddingBottom": 0,
 "propagateClick": true,
 "width": 50,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "minHeight": 1,
 "top": "40%",
 "paddingRight": 0,
 "bottom": "40%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "class": "IconButton",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "backgroundOpacity": 0
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "90%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container"
 },
 "height": "100%",
 "paddingLeft": 0,
 "backgroundOpacity": 0.3
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "maxHeight": 50,
 "paddingBottom": 0,
 "right": 9,
 "propagateClick": true,
 "width": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "minHeight": 1,
 "top": "40%",
 "paddingRight": 0,
 "bottom": "40%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "class": "IconButton",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "backgroundOpacity": 0
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "width": "85%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "paddingLeft": 0,
 "backgroundOpacity": 1
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "50%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "paddingLeft": 50,
 "backgroundOpacity": 1
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "width": "25%",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "IconButton",
 "height": "75%",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "backgroundOpacity": 0
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 140,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "backgroundOpacity": 0.3
},
{
 "itemVerticalAlign": "top",
 "borderRadius": 5,
 "itemMinWidth": 50,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "width": "100%",
 "paddingBottom": 70,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemLabelGap": 7,
 "verticalAlign": "middle",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "borderSize": 0,
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "itemPaddingBottom": 3,
 "paddingRight": 70,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarColor": "#04A3E1",
 "itemThumbnailHeight": 125,
 "minWidth": 1,
 "itemLabelFontStyle": "italic",
 "scrollBarOpacity": 0.5,
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "itemMaxWidth": 1000,
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "gap": 26,
 "height": "92%",
 "itemMaxHeight": 1000,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald",
 "itemBorderRadius": 0,
 "itemThumbnailWidth": 220,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "paddingTop": 10,
 "paddingLeft": 70,
 "itemHorizontalAlign": "center",
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadow": true,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "propagateClick": true,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "bottom": -0.2,
 "horizontalAlign": "center",
 "class": "ThumbnailGrid",
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemMinHeight": 50,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "shadow": false,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadow": true,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemHeight": 160,
 "itemThumbnailScaleMode": "fit_outside",
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelFontSize": 16
},
{
 "borderRadius": 0,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "paddingBottom": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.7147425518638!2d-48.264087685101686!3d-18.8997319871893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445788ad25007%3A0x6dd8ac505b870caa!2sFoco%20Tiro%20Esportivo!5e0!3m2!1spt-BR!2sbr!4v1662572613148!5m2!1spt-BR!2sbr",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "scrollEnabled": true,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "WebFrame"
 },
 "paddingLeft": 0,
 "insetBorder": false,
 "backgroundOpacity": 1
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "width": "25%",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "IconButton",
 "height": "75%",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "X"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "backgroundOpacity": 0
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container photo"
 },
 "height": "100%",
 "paddingLeft": 0,
 "backgroundOpacity": 0.3
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "children": [
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Image_1876C87C_17E5_13A4_4194_E2890B8DEADC"
 ],
 "paddingBottom": 40,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 40,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 40,
 "data": {
  "name": "- Buttons set"
 },
 "height": "100%",
 "paddingLeft": 40,
 "backgroundOpacity": 0.7
},
{
 "borderRadius": 0,
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image"
 },
 "scaleMode": "fit_outside",
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 60,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "backgroundOpacity": 0.3
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 520,
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "paddingLeft": 0,
 "backgroundOpacity": 0.3
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 40,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "backgroundOpacity": 0.3
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingBottom": 0,
 "right": 20,
 "propagateClick": true,
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "minHeight": 50,
 "top": 20,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "IconButton",
 "height": "36.14%",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "backgroundOpacity": 0
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "toolTipBorderRadius": 3,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15,
 "progressBorderColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "transitionDuration": 500,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": "0%",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "class": "ViewerArea",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "shadow": false,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "width": "14.22%",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minHeight": 50,
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton <"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingBottom": 0,
 "right": 10,
 "propagateClick": true,
 "width": "14.22%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "minHeight": 50,
 "top": "20%",
 "paddingRight": 0,
 "bottom": "20%",
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "class": "IconButton",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton >"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingBottom": 0,
 "right": 20,
 "propagateClick": true,
 "width": "10%",
 "borderSize": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "minHeight": 50,
 "top": 20,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "IconButton",
 "height": "10%",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E"
 ],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "top": "26%",
 "paddingRight": 0,
 "bottom": "26%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "shadow": false,
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Level 1"
 },
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "bottom",
 "width": "100%",
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "bottom": "0%",
 "height": 130,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "shadow": false,
 "gap": 5,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container footer"
 },
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "maxHeight": 1000,
 "maxWidth": 1000,
 "id": "Image_1876C87C_17E5_13A4_4194_E2890B8DEADC",
 "left": "0%",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "url": "skin/Image_1876C87C_17E5_13A4_4194_E2890B8DEADC.png",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "class": "Image",
 "height": "35.534%",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image4388"
 },
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "borderRadius": 0,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 20,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.24vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.71vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.71vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.35vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.51vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.35vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.35vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.69vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "paddingLeft": 10,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 50,
 "iconBeforeLabel": true,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "rollOverBackgroundOpacity": 1,
 "width": 180,
 "paddingBottom": 0,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "borderSize": 0,
 "minHeight": 1,
 "pressedBackgroundOpacity": 1,
 "borderColor": "#000000",
 "paddingRight": 0,
 "height": 50,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "2.39vh",
 "label": "LOREM IPSUM",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "shadow": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "data": {
  "name": "Button"
 },
 "paddingLeft": 0,
 "backgroundOpacity": 0.7,
 "fontWeight": "bold"
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "backgroundOpacity": 0.3
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "height": 50,
 "label": "RECEP\u00c7\u00c3O >",
 "gap": 5,
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "data": {
  "name": "Button Tour Info"
 },
 "paddingLeft": 10,
 "backgroundOpacity": 0,
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "backgroundOpacity": 0.3
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "height": 50,
 "label": "STAND >",
 "gap": 23,
 "click": "this.mainPlayList.set('selectedIndex', 13)",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "data": {
  "name": "Button Panorama List"
 },
 "paddingLeft": 10,
 "backgroundOpacity": 0,
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "backgroundOpacity": 0.3
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "shadowSpread": 1,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "iconWidth": 32,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "propagateClick": true,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "height": 50,
 "label": "ARMAS >",
 "gap": 5,
 "click": "this.mainPlayList.set('selectedIndex', 17)",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "data": {
  "name": "Button Photoalbum"
 },
 "paddingLeft": 10,
 "backgroundOpacity": 0,
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "height": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "backgroundOpacity": 0.3
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "width": 40,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 2,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "blue line"
 },
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "backgroundOpacity": 1
},
{
 "borderRadius": 0,
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "paddingBottom": 0,
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "height": 78,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText47602"
 },
 "visible": false,
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "bottom",
 "width": "100%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "height": 56,
 "gap": 7,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container Icons 1"
 },
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "children": [
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_3A0507BD_18E5_1CA4_41B4_DEA39BFAA566",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "width": "100%",
 "overflow": "visible",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "height": 44,
 "gap": 7,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container Icons 2"
 },
 "paddingLeft": 0,
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "maxHeight": 101,
 "propagateClick": false,
 "width": 44,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 44,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "class": "IconButton",
 "shadow": false,
 "transparencyActive": true,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Info"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 101,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "maxHeight": 101,
 "propagateClick": false,
 "width": 44,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 44,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "class": "IconButton",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "maxHeight": 101,
 "propagateClick": false,
 "width": 44,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 44,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "class": "IconButton",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Location"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 101,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "maxHeight": 101,
 "propagateClick": false,
 "width": 44,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 44,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "class": "IconButton",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 101,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "maxHeight": 101,
 "propagateClick": false,
 "width": 44,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 44,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Realtor"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 101,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "maxHeight": 101,
 "propagateClick": false,
 "width": 44,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderSize": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "minHeight": 1,
 "paddingRight": 0,
 "height": 44,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton Video"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 42,
 "id": "IconButton_3A0507BD_18E5_1CA4_41B4_DEA39BFAA566",
 "maxHeight": 42,
 "propagateClick": false,
 "width": 42,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 42,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareFacebook(window.location.href); this.openLink('https://www.facebook.com/focotiroesportivo', '_blank')",
 "class": "IconButton",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton2416"
 },
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_3A0507BD_18E5_1CA4_41B4_DEA39BFAA566.png",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxWidth": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "maxHeight": 101,
 "propagateClick": false,
 "width": 50,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "height": 50,
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton --"
 },
 "visible": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "backgroundOpacity": 0
}],
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getKey": function(key){  return window[key]; },
  "existsKey": function(key){  return key in window; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); }
 },
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "paddingLeft": 0,
 "vrPolyfillScale": 0.7,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
