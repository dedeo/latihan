<?php
$installer = $this;
$installer->startSetup();

try {

/*Homepage*/
$cmsPage = Mage::getModel('cms/page')->setStoreId(0)->load('home');
$content = <<<EOT
<div class="home-slider owl-theme">
<div class="item"><img alt="Banner" src="{{skin url="images/home_banner/banner1.jpg"}}" /></div>
<div class="item"><img alt="Banner" src="{{skin url="images/home_banner/banner1.jpg"}}" /></div>
</div>
<div class="baju-kaos home-product">{{block type="catalog/product_list" name="catalog.baju_kaos" template="catalog/product/featured-row.phtml" url_key="baju-kaos"}}</div>
EOT;

    if(!$cmsPage->getId()){
        $cmsPage->setIdentifier('home');
    }
    $cmsPage->setContent($content)
    ->setStores(0)
    ->setTitle("Vancelebes Cloth Home")
    ->setRootTemplate('one_column')
    ->save();

} catch (Exception $e) {
    throw new Exception('CMS PAGE UPDATE FAILS. ' . $e->getMessage());
}

$installer->endSetup();
