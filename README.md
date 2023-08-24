# Preview component

![Example](/assets/LWC%20Screenshot.png)

# How it works?

This study project uses VIACEP API to get address info at Brazil country filtered by the PostalCode (CEP) 

## Structure
    SFDX side
        LightningComponentBundle/mapCEP 
    Vlocity side
        IntegrationProcedure/CEP_Consulta
        FlexCard/consultaCEP
# SFDX Deploy

Go to the manifest/package.xml and click-right button on the file and select "SFDX: Deploy Source in Manifest to Org"

# Vlocity

In the organization with omnistudio installed, go to the Tab Omnistudio Flexcards > Import button and select the file on vlocity/consultaCEP.json and click next until the activation step and finally activate the LWC Flexcard
