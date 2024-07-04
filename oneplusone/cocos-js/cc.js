System.register(["./v.js"], function (e) {
  "use strict";
  return {
    setters: [
      function (a) {
        e({
          Acceleration: a.er,
          AffineTransform: a.aG,
          AlphaKey: a.cd,
          AmbientInfo: a.dv,
          AnimCurve: a.ac,
          Animation: a.aa,
          AnimationClip: a.a8,
          AnimationComponent: a.aa,
          AnimationManager: a.ag,
          AnimationState: a.a9,
          Asset: a.dU,
          AssetLibrary: a.ec,
          AssetManager: a.e8,
          AsyncDelegate: a.bO,
          AudioClip: a.ak,
          AudioPCMDataView: a.al,
          AudioSource: a.aj,
          AudioSourceComponent: a.aj,
          BASELINE_RATIO: a.A,
          BITMASK_TAG: a.cF,
          BaseNode: a.di,
          BaseRenderData: a.t,
          BitMask: a.bh,
          BitmapFont: a.B,
          BlockInputEvents: a.fA,
          BlockInputEventsComponent: a.fA,
          BloomStage: a.d4,
          BoxCollider2D: a.eW,
          BufferAsset: a.dV,
          BuiltinResMgr: a.ee,
          Button: a.fl,
          ButtonComponent: a.fl,
          CCBoolean: a.bE,
          CCClass: a.bz,
          CCFloat: a.bD,
          CCInteger: a.bC,
          CCLoader: a.ea,
          CCObject: a.bB,
          CCString: a.bF,
          CacheMode: a.q,
          CachedArray: a.bg,
          CallbacksInvoker: a.cJ,
          Camera: a.dI,
          CameraComponent: a.dI,
          Canvas: a.C,
          CanvasComponent: a.C,
          CircleCollider2D: a.eX,
          Collider2D: a.eV,
          Color: a.aL,
          ColorKey: a.cc,
          CompactValueTypeArray: a.bG,
          Component: a.dn,
          Contact2DType: a.eP,
          DEFAULT_OCTREE_DEPTH: a.dB,
          DEFAULT_WORLD_MAX_POS: a.dA,
          DEFAULT_WORLD_MIN_POS: a.dz,
          DebugMode: a.b$,
          DebugView: a.dc,
          DeferredPipeline: a.d0,
          DeferredPipelineBuilder: a.dh,
          Details: a.dS,
          Director: a.dN,
          DistanceJoint2D: a.e_,
          DynamicAtlasManager: a.a3,
          ECollider2DType: a.eL,
          EJoint2DType: a.eM,
          ENUM_TAG: a.cE,
          EPSILON: a.aQ,
          EPhysics2DDrawFlags: a.eQ,
          ERaycast2DType: a.eO,
          ERigidBody2DType: a.eK,
          EasingMethod: a.cI,
          EditBox: a.fm,
          EditBoxComponent: a.fm,
          EditorExtendable: a.bL,
          EffectAsset: a.e1,
          Enum: a.bi,
          Event: a.ei,
          EventAcceleration: a.ej,
          EventGamepad: a.en,
          EventHMD: a.ep,
          EventHandheld: a.eq,
          EventHandle: a.eo,
          EventHandler: a.dm,
          EventInfo: a.ad,
          EventKeyboard: a.ek,
          EventMouse: a.el,
          EventTarget: a.bM,
          EventTouch: a.em,
          Eventify: a.bN,
          ExtrapolationMode: a.c7,
          FixedJoint2D: a.f3,
          FogInfo: a.dx,
          Font: a.F,
          ForwardFlow: a.c_,
          ForwardPipeline: a.cY,
          ForwardPipelineBuilder: a.dg,
          ForwardStage: a.c$,
          GCObject: a.cB,
          Game: a.dP,
          GbufferStage: a.d2,
          Gradient: a.ce,
          Graphics: a.G,
          GraphicsComponent: a.G,
          HALF_PI: a.aO,
          HingeJoint2D: a.f5,
          HorizontalTextAlignment: a.H,
          HtmlTextParser: a.z,
          ImageAsset: a.d_,
          Input: a.ev,
          InstanceMaterialType: a.I,
          InstancedBuffer: a.d8,
          Intersection2D: a.eC,
          JavaScript: a.e5,
          Joint2D: a.eZ,
          JsonAsset: a.dZ,
          KeyCode: a.es,
          LRUCache: a.J,
          Label: a.r,
          LabelAtlas: a.L,
          LabelComponent: a.r,
          LabelOutline: a.m,
          LabelOutlineComponent: a.m,
          LabelShadow: a.o,
          Layers: a.dk,
          Layout: a.fn,
          LayoutComponent: a.fn,
          LightProbeInfo: a.dF,
          LightingStage: a.d3,
          MATH_FLOAT_ARRAY: a.bc,
          MIDDLE_RATIO: a.D,
          MainFlow: a.d1,
          Mask: a.h,
          MaskComponent: a.h,
          Mat3: a.aD,
          Mat4: a.aE,
          Material: a.e2,
          MathBase: a.bd,
          MeshBuffer: a.M,
          MeshRenderData: a.v,
          MissingScript: a.dL,
          MobilityMode: a.dt,
          ModelRenderer: a.dJ,
          MotionStreak: a.eE,
          MotionStreakAssemblerManager: a.eF,
          MouseJoint2D: a.f0,
          Node: a.di,
          NodeActivator: a.dp,
          NodeEventType: a.du,
          NodePool: a.eg,
          NodeSpace: a.dr,
          ObjectCurve: a.cb,
          OctreeInfo: a.dC,
          Overflow: a.O,
          PHYSICS_2D_PTM_RATIO: a.eR,
          PageView: a.fw,
          PageViewComponent: a.fw,
          PageViewIndicator: a.fx,
          PageViewIndicatorComponent: a.fx,
          ParticleAsset: a.eH,
          ParticleSystem2D: a.eD,
          ParticleSystem2DAssembler: a.eG,
          Physics2DManifoldType: a.eT,
          Physics2DUtils: a.eI,
          PhysicsGroup: a.eN,
          PhysicsSystem2D: a.eS,
          PipelineEventProcessor: a.da,
          PipelineEventType: a.db,
          PipelineSceneData: a.cX,
          PipelineStateManager: a.d9,
          PolygonCollider2D: a.eY,
          Pool: a.be,
          PostProcessStage: a.d5,
          PostSettingsInfo: a.dE,
          Prefab: a.dq,
          PrefabLink: a.dM,
          PrivateNode: a.dH,
          Profiler: a.f6,
          ProgressBar: a.fo,
          ProgressBarComponent: a.fo,
          QuadRenderData: a.Q,
          Quat: a.aB,
          QuatCurve: a.c9,
          QuatInterpolationMode: a.ca,
          RatioSampler: a.ab,
          RealCurve: a.c5,
          RealInterpolationMode: a.c6,
          Rect: a.aJ,
          RecyclePool: a.bf,
          ReflectionProbeFlow: a.dd,
          ReflectionProbeStage: a.de,
          RelativeJoint2D: a.f1,
          RenderComponent: a.d,
          RenderData: a.u,
          RenderFlow: a.cV,
          RenderPipeline: a.cU,
          RenderRoot2D: a.R,
          RenderStage: a.cW,
          RenderTexture: a.e3,
          Renderable2D: a.d,
          RenderableComponent: a.dJ,
          Renderer: a.dK,
          RenderingSubMesh: a.dW,
          ResolutionPolicy: a.fE,
          RichText: a.i,
          RichTextComponent: a.i,
          RigidBody2D: a.eU,
          Root: a.ao,
          SafeArea: a.fy,
          SafeAreaComponent: a.fy,
          Scene: a.dj,
          SceneAsset: a.dX,
          SceneGlobals: a.dG,
          Scheduler: a.c4,
          Script: a.e4,
          ScrollBar: a.fp,
          ScrollBarComponent: a.fp,
          ScrollView: a.fq,
          ScrollViewComponent: a.fq,
          Settings: a.cf,
          ShadowFlow: a.d6,
          ShadowStage: a.d7,
          ShadowsInfo: a.dy,
          Size: a.aH,
          SkinInfo: a.dD,
          SkyboxInfo: a.dw,
          Slider: a.fr,
          SliderComponent: a.fr,
          SliderJoint2D: a.f2,
          Sorting: a.a6,
          SortingLayers: a.a5,
          SpringJoint2D: a.e$,
          Sprite: a.j,
          SpriteAtlas: a.a,
          SpriteComponent: a.j,
          SpriteFrame: a.b,
          SpriteRenderer: a.f,
          StencilManager: a.S,
          SubContextView: a.fB,
          System: a.ch,
          SystemEvent: a.ex,
          SystemEventType: a.eh,
          TTFFont: a.T,
          TWO_PI: a.aP,
          TangentWeightMode: a.c8,
          TextAsset: a.dY,
          Texture2D: a.d$,
          TextureCube: a.e0,
          TiledLayer: a.fc,
          TiledMap: a.f9,
          TiledMapAsset: a.fa,
          TiledObjectGroup: a.fd,
          TiledTile: a.fe,
          TiledUserNodeData: a.fb,
          Toggle: a.fs,
          ToggleComponent: a.fs,
          ToggleContainer: a.ft,
          ToggleContainerComponent: a.ft,
          Touch: a.et,
          TransformBit: a.ds,
          Tween: a.fj,
          TweenAction: a.fk,
          TweenSystem: a.fg,
          TypeScript: a.e6,
          UI: a.x,
          UIComponent: a.U,
          UICoordinateTracker: a.fz,
          UICoordinateTrackerComponent: a.fz,
          UIDrawBatch: a.y,
          UIMeshRenderer: a.k,
          UIModelComponent: a.k,
          UIOpacity: a.p,
          UIOpacityComponent: a.p,
          UIRenderable: a.d,
          UIRenderer: a.d,
          UIReorderComponent: a.fG,
          UIStaticBatch: a.n,
          UIStaticBatchComponent: a.n,
          UITransform: a.e,
          UITransformComponent: a.e,
          UIVertexFormat: a.w,
          VERSION: a.as,
          ValueType: a.bk,
          Vec2: a.av,
          Vec3: a.ax,
          Vec4: a.az,
          VerticalTextAlignment: a.V,
          VideoClip: a.fH,
          VideoPlayer: a.fI,
          View: a.fD,
          ViewGroup: a.fu,
          WebGL2Device: a.eB,
          WebGLDevice: a.eA,
          WebView: a.fJ,
          WheelJoint2D: a.f4,
          Widget: a.fv,
          WidgetComponent: a.fv,
          WorldNode3DToLocalNodeUI: a.bv,
          WorldNode3DToWorldNodeUI: a.bw,
          __checkObsoleteInNamespace__: a.bu,
          __checkObsolete__: a.bt,
          _decorator: a.by,
          _resetDebugSetting: a.cL,
          absMax: a.b8,
          absMaxComponent: a.b7,
          animation: a.a7,
          applyMixins: a.cK,
          approx: a.aS,
          assert: a.bT,
          assertID: a.bX,
          assertIsNonNullable: a.cP,
          assertIsTrue: a.cQ,
          assertsArrayIndex: a.cR,
          assetManager: a.e7,
          bezier: a.ck,
          bezierByTime: a.cl,
          binarySearch: a.cM,
          binarySearchBy: a.cO,
          binarySearchEpsilon: a.cN,
          bits: a.au,
          builtinResMgr: a.ef,
          ccenum: a.bj,
          cclegacy: a.at,
          clamp: a.aT,
          clamp01: a.aU,
          color: a.aM,
          computeRatioByType: a.af,
          convertUtils: a.bx,
          createDefaultPipeline: a.cZ,
          debug: a.bP,
          deprecateModuleExportedName: a.bs,
          deserialize: a.dR,
          deserializeTag: a.bI,
          director: a.dO,
          disallowAnimation: a.cv,
          displayName: a.cq,
          displayOrder: a.cr,
          dragonBones: a.ez,
          dynamicAtlasManager: a.a4,
          easing: a.ci,
          editable: a.cn,
          editorExtrasTag: a.bH,
          enumerableProps: a.b9,
          equals: a.aR,
          error: a.bR,
          errorID: a.bV,
          find: a.dl,
          flattenCodeArray: a.cS,
          floatToHalf: a.ba,
          formerlySerializedAs: a.cx,
          fragmentText: a.a2,
          game: a.dQ,
          garbageCollectionManager: a.cA,
          geometry: a.ar,
          getBaselineOffset: a.E,
          getEnglishWordPartAtFirst: a.a0,
          getEnglishWordPartAtLast: a.a1,
          getError: a.b_,
          getPathFromRoot: a.ah,
          getPhaseID: a.df,
          getSerializationMetadata: a.bK,
          getSymbolAt: a.X,
          getSymbolCodeAt: a.Y,
          getSymbolLength: a.W,
          getWorldTransformUntilRoot: a.ai,
          gfx: a.am,
          graphicsAssembler: a.g,
          halfToFloat: a.bb,
          input: a.eu,
          instantiate: a.dT,
          inverseLerp: a.b6,
          isCCClassOrFastDefined: a.bA,
          isCCObject: a.cG,
          isDisplayStats: a.bY,
          isEnglishWordPartAtFirst: a.Z,
          isEnglishWordPartAtLast: a.$,
          isUnicodeCJK: a.K,
          isUnicodeSpace: a.N,
          isValid: a.cH,
          js: a.bl,
          jsbUtils: a.cm,
          labelAssembler: a.l,
          lerp: a.aV,
          loader: a.eb,
          log: a.bQ,
          logID: a.bU,
          macro: a.c2,
          markAsWarning: a.br,
          mat4: a.aF,
          math: a.ap,
          memop: a.aq,
          misc: a.bm,
          murmurhash2_32_gc: a.cj,
          native: a.ey,
          nextPow2: a.b3,
          override: a.cw,
          path: a.bn,
          pingPong: a.b5,
          pipeline: a.cT,
          preTransforms: a.aN,
          profiler: a.f7,
          pseudoRandom: a.b0,
          pseudoRandomRange: a.b1,
          pseudoRandomRangeInt: a.b2,
          quat: a.aC,
          random: a.aY,
          randomRange: a.a_,
          randomRangeInt: a.a$,
          range: a.cs,
          rangeStep: a.ct,
          rect: a.aK,
          removeProperty: a.bq,
          renderer: a.an,
          repeat: a.b4,
          replaceProperty: a.bp,
          resources: a.e9,
          safeMeasureText: a.P,
          sampleAnimationCurve: a.ae,
          screen: a.c0,
          selector: a.eJ,
          serializable: a.cy,
          serializeTag: a.bJ,
          setDefaultLogTimes: a.bo,
          setDisplayStats: a.bZ,
          setPropertyEnumType: a.cC,
          setPropertyEnumTypeOnAttrs: a.cD,
          setRandGenerator: a.aZ,
          settings: a.cg,
          shift: a.cz,
          size: a.aI,
          slide: a.cu,
          sp: a.f8,
          spriteAssembler: a.s,
          sys: a.c1,
          systemEvent: a.ew,
          tiledLayerAssembler: a.ff,
          toDegree: a.aX,
          toRadian: a.aW,
          tooltip: a.co,
          tween: a.fh,
          tweenUtil: a.fi,
          url: a.ed,
          v2: a.aw,
          v3: a.ay,
          v4: a.aA,
          view: a.fF,
          visible: a.cp,
          visibleRect: a.c3,
          warn: a.bS,
          warnID: a.bW,
          widgetManager: a.fC,
        });
      },
    ],
    execute: function () {},
  };
});
