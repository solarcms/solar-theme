<?php
/**
 * Created by PhpStorm.
 * User: n0m4dz
 * Date: 11/11/15
 * Time: 11:31 AM
 */

namespace Solarcms\SolarTheme;

use Illuminate\Support\ServiceProvider as ServiceProvider;

class SolarThemeServiceProvider extends ServiceProvider
{

    public function boot()
    {
        // For publishing assets
        $this->publishes([
            __DIR__ . DIRECTORY_SEPARATOR . 'Assets'. DIRECTORY_SEPARATOR . 'dist' => public_path('shared'),
        ], 'shared');

    }

    public function register()
    {
        $this->loadViewsFrom(__DIR__ . DIRECTORY_SEPARATOR .'Views', 'SolarTheme');
    }
}