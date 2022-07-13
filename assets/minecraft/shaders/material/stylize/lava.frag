#include forgetmenot:shaders/lib/materials.glsl

void frx_materialFragment() {
    frx_fragColor.rgb *= vec3(2.0, 1.0, 0.5);

    //frx_fragEmissive = frx_luminance(frx_fragColor.rgb);
    frx_fragEmissive = 1.0;
    frx_fragEnableDiffuse = false;
    frx_fragEnableAo = false;
}