        </div>
        <footer>
            <!-- Scripts -->
            <script src="{{ asset('js/app.js') }}"></script>
            <script src="{{ asset('js/datatables.js') }}"></script>
            <script type="text/javascript">
                var intialize_datatable = {
                        "dom"     : 'ltip',
                        "lengthMenu"    : [[20, 50, -1], [20, 50, "All"]],
                    },
                language_pt = "{{ session('locale') == 'pt-br' ? true : false}}";

                if(language_pt){
                    intialize_datatable.language = {
                        "url":"{{ asset('js/Portuguese-Brasil.json') }}"
                    };
                }
            </script>
            <script src="{{ asset('js/jquery.mask.js') }}"></script>
            <script src="{{ asset('js/default.js') }}"></script>
        </footer>
    </body>
</html>
