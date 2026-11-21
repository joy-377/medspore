// Resolves origin-root browser modules in the Node smoke tester.
export async function resolve(specifier,context,next){
 if(specifier.startsWith('/data/')||specifier.startsWith('/js/'))return next(new URL('..'+specifier,import.meta.url).href,context);
 return next(specifier,context);
}
