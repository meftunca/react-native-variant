import{fontSizes,contrasts,fontWeights,letterSpacings}from'./Typography';import{blue500,amber500,purple500,red500,grey900,teal500}from'./../Helpers/palette';var defaultTheme={gutter:4,spacing:function spacing(){var multiplier=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;return this.gutter*multiplier;},color:{primary:blue500,secondary:teal500,accent:purple500,error:red500,warning:amber500,text:grey900,darkenValue:0.3,lightenValue:0.3,defaultContrastValue:0},components:{surface:{root:{backgroundColor:'white',elevation:1,borderRadius:2,margin:0,padding:0,overflow:'hidden'},props:{justify:'flex-start',alignItems:'flex-start',alignContent:'center',direction:'row'}}},typography:{fontSizes:fontSizes,contrasts:contrasts,fontWeights:fontWeights,letterSpacings:letterSpacings}};export default defaultTheme;
//# sourceMappingURL=defaultTheme.js.map