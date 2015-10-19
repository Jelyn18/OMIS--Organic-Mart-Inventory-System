module.exports = function(grunt)
{
grunt.initConfig({
  responsive_images: {
    myTask: {
      options: {
        sizes: [{
        name: 'Small1',
          width: 240,
          height: 180,

          quality: 70
        },{
          name: 'large',
          width: 640,
          height: 480,

          quality: 70
          
        },{
          name: "large",
          width: 1024,
          height: 768,
          suffix: "_x2",
          aspectRatio: false, 
          quality: 70
        }]
      },
      files: [{
        expand: true,
        src: ['Pictures/*.{jpeg,jpg,gif,png}'],
        dest: 'new/'
      }]
    }
  },
})
	grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default',['responsive_images']);
    
};