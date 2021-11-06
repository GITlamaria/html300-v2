export default {
    //apply border to image when clicked functionality
    data() {
        return {
            isActive: false
        }
        },
        
        methods: {
            toggleClass: function(){
                this.isActive = !this.isActive;
        }
    }
}