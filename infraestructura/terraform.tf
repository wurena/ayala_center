# create Resource Group
resource "azurerm_resource_group" "rg" {
  name     = "${var.region}"
  location = "${var.resourceGroup}"
}

# create Container Registry
resource "azurerm_container_registry" "acr" {
  name                     = "containerRegistry1"
  resource_group_name      = "${azurerm_resource_group.rg.name}"
  location                 = "${azurerm_resource_group.rg.location}"
  sku                      = "Premium"
  admin_enabled            = false
  georeplication_locations = "${var.geo_replication}"
}

# Create azure Load Balancer
resource "azurerm_public_ip" "test" {
  name                = "PublicIPForLB"
  location            = "${var.region}"
  resource_group_name = "${azurerm_resource_group.rg.name}"
  allocation_method   = "Static"
}

resource "azurerm_lb" "ayalaLB" {
  name                = "${var.lbName}"
  location            = "${var.region}"
  resource_group_name = "${azurerm_resource_group.rg.name}"

  frontend_ip_configuration {
    name                 = "PublicIPAddress"
    public_ip_address_id = "${azurerm_public_ip.test.id}"
  }
}