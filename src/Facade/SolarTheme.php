<?php
/**
 * Created by PhpStorm.
 * User: n0m4dz
 * Date: 11/10/15
 * Time: 4:48 PM
 */

namespace Solarcms\SolarTheme\Facade;

use Illuminate\Support\Facades\Facade as Facade;

class SolarTheme extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'SolarTheme';
    }
}