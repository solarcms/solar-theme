<aside id="aside" class="app-aside modal" role="menu">
    <div class="left">
        <div class="box bg-dark dk">
            <div class="navbar md-whiteframe-z1 no-radius bg-dark">
                <!-- brand -->
                <a class="navbar-brand">
                        <span class="hidden-folded m-l inline text-info">

                            <h3 class="text-white">Solar CMS</h3>
                        </span>
                </a>
                <!-- / brand -->
            </div>
            <div class="box-row">
                <div class="box-cell scrollable hover">
                    <div class="box-inner">
                        <div class="p hidden-folded bg-dark">
                            <div class="rounded w-64 bg-dark dk inline pos-rlt">

                            </div>
                            <a class="block m-t-sm" ui-toggle-class="hide, show" target="#nav, #account">

                            <span class="pull-right auto">
                            <i class="fa inline fa-caret-down"></i>
                            <i class="fa none fa-caret-up"></i>
                            </span>
                                Tseegii Tselmeg
                            </a>
                        </div>
                        <div id="nav">
                            <nav ui-nav>
                                <ul class="nav">
                                    <li class="nav-header m-v-sm hidden-folded">
                                        Үндсэн модуль
                                    </li>
                                    <li>
                                        <a href="/solar/dashboard" md-ink-ripple>
                                            <i class="icon fa fa-pie-chart i-20"></i>
                                            <span class="font-normal">Самбар</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/solar/usermanager" md-ink-ripple>
                                            <i class="icon fa fa-user i-20"></i>
                                            <span class="font-normal">Хэрэглэгчид</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a md-ink-ripple>
                                            <i class="icon fa fa-inbox i-20"></i>
                                            <span class="font-normal">Бараа</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a md-ink-ripple>
                                            <i class="icon fa fa-usd i-20"></i>
                                            <span class="font-normal">Төлбөр</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a md-ink-ripple>
                        <span class="pull-right text-muted">
                          <i class="fa fa-caret-down"></i>
                        </span>
                                            <i class="icon mdi-toggle-radio-button-on i-20"></i>
                                            <span class="font-normal">Form</span>
                                        </a>
                                        <ul class="nav nav-sub">
                                            <li>
                                                <a md-ink-ripple href="ui.form.layout.html">Form Layout</a>
                                            </li>
                                            <li>
                                                <a md-ink-ripple href="ui.form.element.html">Form Element</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="b-b b m-v-sm"></li>

                                    <li>
                                        <a md-ink-ripple ui-toggle-class="hide, show" target="#nav, #account">
                                            <span>Цэсний тохиргоо</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a md-ink-ripple ui-toggle-class="hide, show" target="#nav, #account">
                                            <span>Системийн тохиргоо</span>
                                        </a>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <div id="account" class="hide m-v-xs">
                            <nav>
                                <ul class="nav">
                                    <li>
                                        <a md-ink-ripple href="page.profile.html">
                                            <i class="icon mdi-action-perm-contact-cal i-20"></i>
                                            <span>My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a md-ink-ripple href="page.settings.html">
                                            <i class="icon mdi-action-settings i-20"></i>
                                            <span>Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <ul class="nav b-t b">
                    <li>
                        <a href="/solar/auth/login" md-ink-ripple>
                            <i class="icon mdi-action-exit-to-app i-20"></i>
                            <span>Системээс гарах</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</aside>