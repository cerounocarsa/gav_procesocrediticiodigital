        <!-- Vendor JS -->
        <script src="./../src/js/vendors.min.js"></script>
        <script src="./../src/js/pages/chat-popup.js"></script>
        
        <script src="./../assets/icons/feather-icons/feather.min.js"></script>
        <script src="./../assets/vendor_plugins/bootstrap-slider/bootstrap-slider.js"></script>
        <script src="./../assets/vendor_components/OwlCarousel2/dist/owl.carousel.js"></script>
        <script src="./../assets/vendor_components/flexslider/jquery.flexslider.js"></script>
        <script src="./../assets/vendor_components/apexcharts-bundle/dist/apexcharts.js"></script>
        <script src="./../assets/vendor_components/jquery-steps-master/build/jquery.steps.js"></script>
        <script src="./../assets/vendor_components/jquery-validation-1.17.0/dist/jquery.validate.js"></script>
        <script src="./../assets/vendor_components/sweetalert/sweetalert.min.js"></script>
        <script src="./../assets/vendor_components/select2/dist/js/select2.full.js"></script>
        <script src="./../assets/vendor_plugins/input-mask/jquery.inputmask.js"></script>
        <script src="./../assets/vendor_plugins/input-mask/jquery.inputmask.date.extensions.js"></script>
        <script src="./../assets/vendor_plugins/input-mask/jquery.inputmask.extensions.js"></script>
        <script src="./../assets/vendor_components/moment/min/moment.min.js"></script>
        <script src="./../assets/vendor_components/jquery-toast-plugin-master/src/jquery.toast.js"></script>
        <script src="./../assets/vendor_components/datatable/datatables.min.js"></script>

        <!-- Custom App -->
        <script src="./../src/js/template.js"></script>
        <script src="./../src/js/demo.js"></script>
        <script src="./../src/js/pages/slider.js"></script>
        <script src="./../js/api.js?<?php echo date('Ymd');?>"></script>
        <script src="./../js/select.js?<?php echo date('Ymd');?>"></script>

        <script>
                $(function () {
                        "use strict";

                        //Initialize Select2 Elements
                        $('.select2').select2();
                        $('[data-mask]').inputmask();
                });
        </script>



<?php
    if(isset($_GET['code'])){
        $codeRest       = $_GET['code'];
        $msgRest        = $_GET['msg'];
    } else {
        $codeRest       = 0;
        $msgRest        = '';
    }
    
    if ($codeRest == 200) {
?>
        <script>
                $(document).ready(function () {
                        $(function() {
                                $.toast({
                                        heading: 'Correcto!',
                                        text: "<?php echo $msgRest; ?>",
                                        position: 'top-right',
                                        loaderBg: '#ff6849',
                                        icon: 'success',
                                        hideAfter: 3500,
                                        stack: 6
                                });
                        });
                });
                
                //localStorage.clear();
                
                <?php echo getKey(); ?>

        </script>
<?php
    }

    if (($codeRest == 204) || ($codeRest == 400) || ($codeRest == 401)) {
?>
        <script>
                $(document).ready(function () {
                        $(function() {
                                $.toast({
                                        heading: 'Error!',
                                        text: "<?php echo $msgRest; ?>",
                                        position: 'top-right',
                                        loaderBg: '#ff6849',
                                        icon: 'error',
                                        hideAfter: 3500,
                                        stack: 6
                                });
                        });
                });
        </script>
<?php
    }
?>