"use strict";(self.webpackChunkmodlib_docs=self.webpackChunkmodlib_docs||[]).push([[593],{8794:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"devices/frame","title":"Frame","description":"ROI","source":"@site/docs-api/devices/frame.md","sourceDirName":"devices","slug":"/devices/frame","permalink":"/docs/api-reference/devices/frame","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1732028012000,"sidebarPosition":2,"frontMatter":{"title":"Frame","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Device","permalink":"/docs/api-reference/devices/device"},"next":{"title":"Interpreters","permalink":"/docs/api-reference/devices/interpreters/"}}');var r=n(4848),a=n(8453);const l={title:"Frame",sidebar_position:2},t=void 0,c={},o=[{value:"ROI",id:"roi",level:2},{value:"IMAGE_TYPE",id:"image_type",level:2},{value:"RESULT_TYPE",id:"result_type",level:2},{value:"Frame",id:"frame",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:'<span class="signature-title">__init__</span>',id:"__init__",level:4},{value:'<span class="signature-title">display</span>',id:"display",level:4},{value:'<span class="signature-title">json</span>',id:"json",level:4},{value:'<span class="signature-title">from_json</span>',id:"from_json",level:4}];function d(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"module-separator","data-content":"Dataclass"}),"\n",(0,r.jsx)(s.h2,{id:"roi",children:"ROI"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("div",{className:"signature",children:(0,r.jsx)("b",{children:"ROI"})}),"\nROI(left, top, width, height)"]}),"\n",(0,r.jsx)("div",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("span",{className:"signature-title",children:"left"}),"\xa0\xa0\xa0\xa0Alias for field number 0"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("span",{className:"signature-title",children:"top"}),"\xa0\xa0\xa0\xa0Alias for field number 1"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("span",{className:"signature-title",children:"width"}),"\xa0\xa0\xa0\xa0Alias for field number 2"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("span",{className:"signature-title",children:"height"}),"\xa0\xa0\xa0\xa0Alias for field number 3"]}),"\n"]}),"\n",(0,r.jsx)("div",{className:"module-separator","data-content":"Dataclass"}),"\n",(0,r.jsx)(s.h2,{id:"image_type",children:"IMAGE_TYPE"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("div",{className:"signature",children:(0,r.jsx)("b",{children:"IMAGE_TYPE"})}),"\nRepresentation of the available image types provided in ",(0,r.jsx)(s.code,{children:"frame.image"}),". Can be used as e.g. ",(0,r.jsx)(s.code,{children:"IMAGE_TYPE.VGA"})]}),"\n",(0,r.jsx)("div",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("span",{className:"signature-title",children:"VGA"}),"\xa0\xa0\xa0\xa0"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("span",{className:"signature-title",children:"INPUT_TENSOR"}),"\xa0\xa0\xa0\xa0"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("span",{className:"signature-title",children:"SOURCE"}),"\xa0\xa0\xa0\xa0"]}),"\n"]}),"\n",(0,r.jsx)("div",{className:"module-separator","data-content":"Dataclass"}),"\n",(0,r.jsx)(s.h2,{id:"result_type",children:"RESULT_TYPE"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("div",{className:"signature",children:(0,r.jsx)("b",{children:"RESULT_TYPE"})}),"\nUtility dataclass for collecting all Result types."]}),"\n",(0,r.jsx)("div",{}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("span",{className:"signature-title",children:"Classifications"}),"\xa0\xa0\xa0\xa0Data class for classification results."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("span",{className:"signature-title",children:"Detections"}),"\xa0\xa0\xa0\xa0Data class for object detections."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("span",{className:"signature-title",children:"Poses"}),"\xa0\xa0\xa0\xa0Data class for pose estimation results."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("span",{className:"signature-title",children:"Segments"}),"\xa0\xa0\xa0\xa0Data class for segmentation results."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)("span",{className:"signature-title",children:"Anomaly"}),"\xa0\xa0\xa0\xa0Data class for anomaly detection results."]}),"\n"]}),"\n",(0,r.jsx)("div",{className:"module-separator","data-content":"Class"}),"\n",(0,r.jsx)(s.h2,{id:"frame",children:"Frame"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsxs)("div",{className:"signature",children:[(0,r.jsx)("b",{children:"Frame("}),"timestamp:\xa0str, image:\xa0numpy.ndarray, image_type:\xa0",(0,r.jsx)(s.a,{href:"/api-reference/devices/frame#image_type",children:"IMAGE_TYPE"}),", width:\xa0int, height:\xa0int, channels:\xa0int, detections:\xa0Union[",(0,r.jsx)(s.a,{href:"/api-reference/models/results#classifications",children:"Classifications"}),",\xa0",(0,r.jsx)(s.a,{href:"/api-reference/models/results#detections",children:"Detections"}),",\xa0",(0,r.jsx)(s.a,{href:"/api-reference/models/results#poses",children:"Poses"}),",\xa0",(0,r.jsx)(s.a,{href:"/api-reference/models/results#segments",children:"Segments"}),",\xa0",(0,r.jsx)(s.a,{href:"/api-reference/models/results#anomaly",children:"Anomaly"}),"], new_detection:\xa0bool, fps:\xa0float, dps:\xa0float, color_format:\xa0",(0,r.jsx)(s.a,{href:"/api-reference/models/model#color_format",children:"COLOR_FORMAT"}),"\xa0=\xa0'RGB', input_tensor:\xa0Optional[numpy.ndarray]\xa0=\xa0None, roi:\xa0Optional[",(0,r.jsx)(s.a,{href:"/api-reference/devices/frame#roi",children:"ROI"}),"]\xa0=\xa0None",(0,r.jsx)("b",{children:")"})]}),"\nRepresents a frame in a device stream."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"with device as stream:\n    for frame in stream:\n        ...\n"})}),"\n",(0,r.jsx)(s.p,{children:"The frame object has the following available elements:"}),"\n",(0,r.jsx)(s.h3,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("span",{className:"signature-title",children:"timestamp: str"}),"\xa0\xa0\xa0\xa0The timestamp of the frame."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsxs)("span",{className:"signature-title",children:["image_type: ",(0,r.jsx)(s.a,{href:"/api-reference/devices/frame#image_type",children:"IMAGE_TYPE"})]}),"\xa0\xa0\xa0\xa0Specification of what is visualised in ",(0,r.jsx)(s.code,{children:"frame.image"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("span",{className:"signature-title",children:"width: int"}),"\xa0\xa0\xa0\xa0The width of the frame."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("span",{className:"signature-title",children:"height: int"}),"\xa0\xa0\xa0\xa0The height of the frame."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("span",{className:"signature-title",children:"channels: int"}),"\xa0\xa0\xa0\xa0The number of channels in the frame."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("span",{className:"signature-title",children:"new_detection: bool"}),"\xa0\xa0\xa0\xa0Flag if the provided detections are updated or an old copy."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("span",{className:"signature-title",children:"fps: float"}),"\xa0\xa0\xa0\xa0The frames per second of the video stream."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("span",{className:"signature-title",children:"dps: float"}),"\xa0\xa0\xa0\xa0The detections per second in the video stream."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsxs)("span",{className:"signature-title",children:["color_format: ",(0,r.jsx)(s.a,{href:"/api-reference/models/model#color_format",children:"COLOR_FORMAT"})]}),"\xa0\xa0\xa0\xa0The color format of the frame. Defaults to ",(0,r.jsx)(s.code,{children:"RGB"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsxs)("span",{className:"signature-title",children:["roi: Optional[",(0,r.jsx)(s.a,{href:"/api-reference/devices/frame#roi",children:"ROI"}),"]"]}),"\xa0\xa0\xa0\xa0Relative ROI of the input tensor. Defaults to None."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("span",{className:"signature-title",children:"image: numpy.ndarray"}),"\xa0\xa0\xa0\xa0The image data of the frame."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsxs)("span",{className:"signature-title",children:["detections: Union[",(0,r.jsx)(s.a,{href:"/api-reference/models/results#classifications",children:"Classifications"}),",\xa0",(0,r.jsx)(s.a,{href:"/api-reference/models/results#detections",children:"Detections"}),",\xa0",(0,r.jsx)(s.a,{href:"/api-reference/models/results#poses",children:"Poses"}),",\xa0",(0,r.jsx)(s.a,{href:"/api-reference/models/results#segments",children:"Segments"}),",\xa0",(0,r.jsx)(s.a,{href:"/api-reference/models/results#anomaly",children:"Anomaly"}),"]"]}),"\xa0\xa0\xa0\xa0The detections in the frame."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)("span",{className:"signature-title",children:"input_tensor: Optional[numpy.ndarray]"}),"\xa0\xa0\xa0\xa0The input tensor of the frame. Defaults to None."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h4,{id:"__init__",children:(0,r.jsx)("span",{className:"signature-title",children:"__init__"})}),"\n",(0,r.jsxs)("div",{className:"signature",children:[(0,r.jsx)("b",{children:"__init__("}),"self, timestamp:\xa0str, image:\xa0numpy.ndarray, image_type:\xa0",(0,r.jsx)(s.a,{href:"/api-reference/devices/frame#image_type",children:"IMAGE_TYPE"}),", width:\xa0int, height:\xa0int, channels:\xa0int, detections:\xa0Union[",(0,r.jsx)(s.a,{href:"/api-reference/models/results#classifications",children:"Classifications"}),",\xa0",(0,r.jsx)(s.a,{href:"/api-reference/models/results#detections",children:"Detections"}),",\xa0",(0,r.jsx)(s.a,{href:"/api-reference/models/results#poses",children:"Poses"}),",\xa0",(0,r.jsx)(s.a,{href:"/api-reference/models/results#segments",children:"Segments"}),",\xa0",(0,r.jsx)(s.a,{href:"/api-reference/models/results#anomaly",children:"Anomaly"}),"], new_detection:\xa0bool, fps:\xa0float, dps:\xa0float, color_format:\xa0",(0,r.jsx)(s.a,{href:"/api-reference/models/model#color_format",children:"COLOR_FORMAT"}),"\xa0=\xa0'RGB', input_tensor:\xa0Optional[numpy.ndarray]\xa0=\xa0None, roi:\xa0Optional[",(0,r.jsx)(s.a,{href:"/api-reference/devices/frame#roi",children:"ROI"}),"]\xa0=\xa0None",(0,r.jsx)("b",{children:")"})]}),"\n",(0,r.jsx)(s.p,{children:"Initialize self.  See help(type(self)) for accurate signature."}),"\n",(0,r.jsx)(s.h4,{id:"display",children:(0,r.jsx)("span",{className:"signature-title",children:"display"})}),"\n",(0,r.jsxs)("div",{className:"signature",children:[(0,r.jsx)("b",{children:"display("}),"self, show_fps_dps:\xa0bool\xa0=\xa0True, cropping:\xa0Union[",(0,r.jsx)(s.a,{href:"/api-reference/devices/frame#roi",children:"ROI"}),",\xa0Tuple[float,\xa0float,\xa0float,\xa0float],\xa0ForwardRef(None)]\xa0=\xa0None, rotate:\xa0Optional[int]\xa0=\xa0None, flip:\xa0Optional[int]\xa0=\xa0None, resize_image:\xa0bool\xa0=\xa0False",(0,r.jsx)("b",{children:")"})]}),"\n",(0,r.jsx)(s.p,{children:"Display the frame with various options for visualization."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Args:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"show_fps_dps"})," (bool\xa0=\xa0True): If True, display the frames per second (FPS) and detections per second (DPS) on the image."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"cropping"})," (Union[",(0,r.jsx)(s.a,{href:"/api-reference/devices/frame#roi",children:"ROI"}),",\xa0Tuple[float,\xa0float,\xa0float,\xa0float],\xa0ForwardRef(None)]\xa0=\xa0None): The region of interest to display, either as a named tuple ROI or a tuple of four floats\n(left, top, width, height). Defaults to None for no cropping."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"rotate"})," (Optional[int]\xa0=\xa0None): The rotation code for the image. Use cv2 rotation codes:"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["0 or cv2.ROTATE_90_CLOCKWISE: Rotate the image 90 degrees clockwise.",(0,r.jsx)(s.br,{}),"\n","1 or cv2.ROTATE_180: Rotate the image 180 degrees.",(0,r.jsx)(s.br,{}),"\n","2 or cv2.ROTATE_90_COUNTERCLOCKWISE: Rotate the image 90 degrees counterclockwise.",(0,r.jsx)(s.br,{}),"\n","None: No rotation."]}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"flip"})," (Optional[int]\xa0=\xa0None): The flip code for the image. Use 0 for vertical, 1 for horizontal, -1 for both, or None for no flip."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"resize_image"})," (bool\xa0=\xa0False): If True, resize the image to fit the display window."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Raises:"}),(0,r.jsx)(s.br,{}),"\n","ValueError: If the cropping parameter is not a valid ROI or tuple of 4 floats."]}),"\n",(0,r.jsx)(s.h4,{id:"json",children:(0,r.jsx)("span",{className:"signature-title",children:"json"})}),"\n",(0,r.jsxs)("div",{className:"signature",children:[(0,r.jsx)("b",{children:"json("}),"self",(0,r.jsx)("b",{children:")"})," \u2011> dict"]}),"\n",(0,r.jsx)(s.p,{children:"Convert the complete Frame to a JSON-serializable dictionary."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Returns:"})," (dict)",(0,r.jsx)(s.br,{}),"\n","The JSON-serializable dictionary."]}),"\n",(0,r.jsx)(s.h4,{id:"from_json",children:(0,r.jsx)("span",{className:"signature-title",children:"from_json"})}),"\n",(0,r.jsx)("div",{className:"decorator",children:"@classmethod"}),"\n",(0,r.jsxs)("div",{className:"signature",children:[(0,r.jsx)("b",{children:"from_json("}),"data:\xa0dict",(0,r.jsx)("b",{children:")"})," \u2011> ",(0,r.jsx)(s.a,{href:"/api-reference/devices/frame#frame",children:"Frame"})]}),"\n",(0,r.jsx)(s.p,{children:"Create a Frame instance from a JSON-serializable dictionary."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Args:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"data"})," (dict): JSON-serializable dictionary with frame data."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Returns:"})," (",(0,r.jsx)(s.a,{href:"/api-reference/devices/frame#frame",children:"Frame"}),")",(0,r.jsx)(s.br,{}),"\n","Frame: The Frame instance created from the JSON data."]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>t});var i=n(6540);const r={},a=i.createContext(r);function l(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);